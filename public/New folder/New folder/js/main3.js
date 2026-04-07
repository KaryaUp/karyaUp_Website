
// 16. Ecosystem Integration Canvas Drawing
const ecoCanvas = document.getElementById('eco-canvas');
if(ecoCanvas) {
    const ecoCtx = ecoCanvas.getContext('2d');
    const ecoView = document.querySelector('.ecosystem-view');
    const nodes = document.querySelectorAll('.node, .eco-core');
    
    // Resize canvas
    function resizeEcoCanvas() {
        if(!ecoView) return;
        ecoCanvas.width = ecoView.offsetWidth;
        ecoCanvas.height = ecoView.offsetHeight;
    }
    resizeEcoCanvas();
    window.addEventListener('resize', resizeEcoCanvas);
    
    // Draw connecting lines
    function drawConnections() {
        ecoCtx.clearRect(0, 0, ecoCanvas.width, ecoCanvas.height);
        
        const core = document.querySelector('.eco-core');
        if(!core) return;
        
        const coreRect = core.getBoundingClientRect();
        const viewRect = ecoView.getBoundingClientRect();
        const cx = (coreRect.left - viewRect.left) + coreRect.width / 2;
        const cy = (coreRect.top - viewRect.top) + coreRect.height / 2;
        
        nodes.forEach(node => {
            if(node === core) return;
            const nodeRect = node.getBoundingClientRect();
            const nx = (nodeRect.left - viewRect.left) + nodeRect.width / 2;
            const ny = (nodeRect.top - viewRect.top) + nodeRect.height / 2;
            
            // Draw line
            ecoCtx.beginPath();
            ecoCtx.moveTo(cx, cy);
            ecoCtx.lineTo(nx, ny);
            
            // Gradient based on distance
            const dist = Math.hypot(nx - cx, ny - cy);
            const opacity = Math.max(0.1, 1 - (dist / 400));
            
            ecoCtx.strokeStyle = `rgba(0, 255, 204, ${opacity})`;
            ecoCtx.lineWidth = 1;
            ecoCtx.stroke();
            
            // Draw flowing dot
            const time = Date.now() * 0.001;
            const speed = 0.5;
            const progress = (time * speed + Array.from(nodes).indexOf(node) * 0.2) % 1;
            
            const dotX = cx + (nx - cx) * progress;
            const dotY = cy + (ny - cy) * progress;
            
            ecoCtx.beginPath();
            ecoCtx.arc(dotX, dotY, 3, 0, Math.PI * 2);
            ecoCtx.fillStyle = 'rgba(0, 255, 204, 0.8)';
            ecoCtx.fill();
            ecoCtx.shadowBlur = 10;
            ecoCtx.shadowColor = 'rgba(0, 255, 204, 1)';
        });
        
        requestAnimationFrame(drawConnections);
    }
    
    requestAnimationFrame(drawConnections);
}
