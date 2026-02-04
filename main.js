// Search functionality
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const query = this.value;
        if (query) {
            alert('Searching for: ' + query);
            // Simulate search - in real app, this would query database
        }
    }
});

// Chat functionality
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message) {
        const chatMessages = document.getElementById('chatMessages');
        
        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'message user-message';
        userMsg.textContent = message;
        chatMessages.appendChild(userMsg);
        
        // Simulate AI response
        setTimeout(() => {
            const aiMsg = document.createElement('div');
            aiMsg.className = 'message ai-message';
            
            // Sample responses based on query
            if (message.toLowerCase().includes('population')) {
                aiMsg.textContent = 'Camarines Norte has a population of approximately 620,000 people. Recent data shows that 30% of barangays face chronic flooding due to outdated drainage systems.';
            } else if (message.toLowerCase().includes('flood')) {
                aiMsg.textContent = 'The flood risk in this area is moderate to high. During monsoon season, the risk increases by 65% due to clogged drainage systems. I recommend reviewing the drainage upgrade solutions in the data panel.';
            } else if (message.toLowerCase().includes('evacuation')) {
                aiMsg.textContent = 'The safest evacuation routes lead to high-ground areas. Two new paved routes are proposed with an estimated budget of ₱95 million. These routes connect to evacuation centers at barangay halls.';
            } else if (message.toLowerCase().includes('volcano')) {
                aiMsg.textContent = 'Mount Mayon is located 120 km northeast of Camarines Norte. It was last active in 2023 and currently poses a moderate risk to the region. PHIVOLCS maintains continuous monitoring of the volcano.';
            } else if (message.toLowerCase().includes('earthquake')) {
                aiMsg.textContent = 'The most recent significant earthquake (M5.2) occurred 85 km west at a depth of 15 km. If a similar event occurs, seismic waves would reach this area in approximately 1 minute. The Philippine Fault Zone is located 45 km east.';
            } else if (message.toLowerCase().includes('solution') || message.toLowerCase().includes('budget')) {
                aiMsg.textContent = 'Three main solutions are proposed: 1) Drainage upgrades (₱280M), 2) Slope stabilization (₱120M), and 3) New evacuation routes (₱95M). Total estimated investment: ₱495 million over 18 months.';
            } else if (message.toLowerCase().includes('weather')) {
                aiMsg.textContent = 'Current weather conditions are being monitored. For detailed forecasts and typhoon tracking, I can provide 2D storm track maps and 3D flood simulations. Would you like to see a simulation for a specific scenario?';
            } else {
                aiMsg.textContent = 'I can help you with information about hazards, population data, infrastructure status, geological risks, and proposed solutions for Camarines Norte. What specific information do you need?';
            }
            
            chatMessages.appendChild(aiMsg);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
        
        input.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Enter key to send message
document.getElementById('chatInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Upload image
function uploadImage() {
    alert('Image upload functionality - Select a photo to identify location and analyze hazards');
    // In a real application, this would open a file picker
    // and process the uploaded image for geolocation and analysis
}

// Toggle 3D view
function toggle3D() {
    const mapView = document.getElementById('mapView');
    mapView.style.background = mapView.style.background.includes('linear-gradient') 
        ? '#e5e7eb' 
        : 'linear-gradient(180deg, #87ceeb 0%, #98d8c8 100%)';
    alert('3D View Toggled');
}

// Toggle hazard overlays
function toggleHazards() {
    const checkbox = document.getElementById('hazardToggle');
    checkbox.checked = !checkbox.checked;
    alert('Hazard overlays ' + (checkbox.checked ? 'enabled' : 'disabled'));
}

// Reset view
function resetView() {
    alert('Map view reset to default');
    // In a real application, this would reset the map to the initial view
    location.reload();
}

// Close panel
function closePanel() {
    const locationPanel = document.querySelector('.location-panel');
    locationPanel.style.display = locationPanel.style.display === 'none' ? 'block' : 'none';
}

// Show alert after 3 seconds (demo)
setTimeout(() => {
    document.getElementById('alert').style.display = 'block';
    setTimeout(() => {
        document.getElementById('alert').style.display = 'none';
    }, 10000);
}, 3000);

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('GeoVision Platform Initialized');
    console.log('Location: Camarines Norte');
    console.log('AI Vision: Ready');
});
