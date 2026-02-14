import { useContext, useRef, useEffect, useCallback } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

/* ===================================================
   Category-specific canvas animation engine
   GPU-friendly: uses requestAnimationFrame + canvas
   =================================================== */

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

// ---- Genome Neural Animation (Biotech) ----
function drawMolecules(ctx, w, h, time, color) {
    const { r, g, b } = hexToRgb(color);
    const nodeCount = 60;
    const nodes = [];
    const maxDist = 150;

    // Deterministic nodes based on time
    for (let i = 0; i < nodeCount; i++) {
        const seed = i * 137.5;
        const x = ((seed * 1.5 + time * 0.015) % w + w) % w;
        const y = ((seed * 2.1 + Math.sin(time * 0.0002 + i) * 100) % h + h) % h;
        nodes.push({ x, y, size: 2 + Math.sin(seed) * 1 });
    }

    // Draw DNA Genome Wave
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.15)`;
    for (let x = 0; x < w; x += 5) {
        const waveY = h * 0.5 + Math.sin(x * 0.005 + time * 0.001) * 60;
        if (x === 0) ctx.moveTo(x, waveY);
        else ctx.lineTo(x, waveY);
    }
    ctx.stroke();

    // Secondary Wave (Anti-phase)
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.08)`;
    for (let x = 0; x < w; x += 5) {
        const waveY = h * 0.5 + Math.sin(x * 0.005 + time * 0.001 + Math.PI) * 60;
        if (x === 0) ctx.moveTo(x, waveY);
        else ctx.lineTo(x, waveY);
    }
    ctx.stroke();

    // Draw Neural Connections & Pulses
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist) {
                const opacity = (1 - dist / maxDist) * 0.12;
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
                ctx.lineWidth = 0.8;
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.stroke();

                // Moving Neural Pulse
                const pulsePos = (time * 0.0015 + i) % 1;
                const px = nodes[i].x + dx * -pulsePos;
                const py = nodes[i].y + dy * -pulsePos;

                ctx.beginPath();
                ctx.arc(px, py, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 4})`;
                ctx.fill();
            }
        }
    }

    // Draw Genetic Nodes
    nodes.forEach((node) => {
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.4)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
    });

    // Floating Codons & Nucleotides (from previous iteration, integrated)
    const geneticSequences = ["ATG", "TAA", "CGA", "GCU", "AAC", "UGA", "A", "T", "G", "C", "U"];
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < 15; i++) {
        const seed = i * 211.7;
        const x = ((seed * 3.2 + time * 0.01) % w + w) % w;
        const y = ((seed * 1.8 + Math.cos(time * 0.00015 + i) * 80) % h + h) % h;
        const opacity = 0.06 + Math.sin(time * 0.0008 + i) * 0.03;
        const fontSize = 11 + (i % 3) * 3;

        ctx.font = `${fontSize}px var(--font-body)`;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        ctx.fillText(geneticSequences[i % geneticSequences.length], x, y);
    }
}

// ---- Code Rain Animation (Dev) ----
function drawCodeRain(ctx, w, h, time, color) {
    const { r, g, b } = hexToRgb(color);
    const chars = '01{}[]<>/=;:function()=>const let var import export return async await';
    const columns = Math.floor(w / 20);

    for (let i = 0; i < columns; i++) {
        const x = i * 20;
        const speed = 0.5 + Math.sin(i * 0.5) * 0.3;
        const y = ((time * speed * 0.05 + i * 100) % (h + 200)) - 100;

        for (let j = 0; j < 8; j++) {
            const charY = y - j * 18;
            if (charY < -20 || charY > h + 20) continue;
            const alpha = (1 - j / 8) * 0.15;
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            ctx.font = '13px JetBrains Mono, monospace';
            const char = chars[Math.floor((time * 0.01 + i + j * 3) % chars.length)];
            ctx.fillText(char, x, charY);
        }
    }
}

// ---- Gradient Blob Animation (Design) ----
function drawGradientBlobs(ctx, w, h, time, color) {
    const { r, g, b } = hexToRgb(color);
    const blobs = [
        { x: 0.3, y: 0.3, size: 0.35, speed: 0.0003 },
        { x: 0.7, y: 0.6, size: 0.3, speed: 0.0004 },
        { x: 0.5, y: 0.8, size: 0.25, speed: 0.0005 },
    ];

    blobs.forEach((blob, i) => {
        const cx = w * blob.x + Math.sin(time * blob.speed + i * 2) * w * 0.1;
        const cy = h * blob.y + Math.cos(time * blob.speed * 0.8 + i * 2) * h * 0.1;
        const radius = Math.min(w, h) * blob.size;

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.08)`);
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.03)`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

// ---- Particle Field Animation (AI) ----
function drawParticles(ctx, w, h, time, color) {
    const { r, g, b } = hexToRgb(color);
    const count = 60;

    const particles = [];
    for (let i = 0; i < count; i++) {
        const seed = i * 137.508;
        const x = ((seed * 1.1 + time * 0.02 * (0.3 + (i % 5) * 0.1)) % w + w) % w;
        const y = ((seed * 0.7 + time * 0.015 * (0.2 + (i % 3) * 0.1)) % h + h) % h;
        particles.push({ x, y, size: 1.5 + Math.sin(seed) * 1 });
    }

    // Draw connections
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.06)`;
    ctx.lineWidth = 0.8;
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                ctx.globalAlpha = (1 - dist / 120) * 0.5;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }

    // Draw particles
    ctx.globalAlpha = 1;
    particles.forEach((p) => {
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.4)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Pulse glow
        const glowSize = p.size * 4 + Math.sin(time * 0.003) * 2;
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize);
        glow.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.15)`);
        glow.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
        ctx.fill();
    });
}

// ---- Floating Shelves Animation (Store Room) ----
function drawShelves(ctx, w, h, time, color) {
    const { r, g, b } = hexToRgb(color);
    const icons = ['📦', '🔧', '🎨', '🎬', '🍳', '💡', '🔌', '📝', '🏠', '📹'];

    // Floating boxes
    for (let i = 0; i < 15; i++) {
        const seed = i * 97.3;
        const x = ((seed * 3.7 + Math.sin(time * 0.0004 + i) * 60) % w + w) % w;
        const y = ((seed * 2.1 + Math.cos(time * 0.0003 + i) * 40) % h + h) % h;
        const size = 30 + Math.sin(seed) * 10;
        const rotation = Math.sin(time * 0.0005 + i * 0.7) * 0.15;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.1)`;
        ctx.lineWidth = 1;
        ctx.strokeRect(-size / 2, -size / 2, size, size);

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.03)`;
        ctx.fillRect(-size / 2, -size / 2, size, size);

        ctx.font = `${size * 0.5}px serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.globalAlpha = 0.15;
        ctx.fillText(icons[i % icons.length], 0, 0);
        ctx.globalAlpha = 1;
        ctx.restore();
    }
}

const animationMap = {
    molecules: drawMolecules,
    code: drawCodeRain,
    gradient: drawGradientBlobs,
    particles: drawParticles,
    shelves: drawShelves,
};

export default function AnimatedBackground() {
    const { theme } = useContext(ThemeContext);
    const canvasRef = useRef(null);
    const animFrameRef = useRef(null);

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;

        const resize = () => {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            ctx.scale(dpr, dpr);
        };
        resize();
        window.addEventListener('resize', resize);

        const drawFn = animationMap[theme.animation] || drawMolecules;
        const color = theme.colors.primary;

        function loop(time) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawFn(ctx, window.innerWidth, window.innerHeight, time, color);
            animFrameRef.current = requestAnimationFrame(loop);
        }

        animFrameRef.current = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener('resize', resize);
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, [theme]);

    useEffect(() => {
        const cleanup = animate();
        return cleanup;
    }, [animate]);

    return (
        <div className="animated-bg" aria-hidden="true">
            <canvas ref={canvasRef} />
        </div>
    );
}
