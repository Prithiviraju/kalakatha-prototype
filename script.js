// KalaKatha Application JavaScript

// Sample craft data
const sampleCrafts = [
    {
        name: "Madhubani Painting",
        region: "Bihar",
        description: "Traditional wall art featuring geometric patterns and mythological themes",
        story: "Born from the walls of Mithila, this ancient art form carries the blessings of Goddess Lakshmi. Each stroke connects you to a 2,500-year-old tradition where mothers taught daughters to paint their prayers and dreams.",
        mythology: "Legend says that King Janak commissioned these paintings for his daughter Sita's wedding to Lord Rama",
        socialMedia: "🎨 From the sacred walls of Mithila to your home! Each Madhubani painting is a prayer made visible, carrying blessings of prosperity and happiness. Handcrafted with natural colors on handmade paper. #MadhubaniArt #IndianHeritage #HandmadeWithLove"
    },
    {
        name: "Kanjeevaram Silk Saree",
        region: "Tamil Nadu",
        description: "Handwoven silk sarees with gold thread work",
        story: "Woven by the descendants of Sage Markanda, each Kanjeevaram saree carries threads of gold that once adorned celestial beings. The silk whispers stories of South Indian royalty and temple traditions spanning over 400 years.",
        mythology: "Created by the celestial weaver Sage Markanda, blessed by Lord Vishnu himself",
        socialMedia: "✨ Royal elegance meets divine craftsmanship! This Kanjeevaram silk saree carries 400+ years of tradition in every golden thread. Blessed by temple traditions of Tamil Nadu. #KanjeevaramSilk #SouthIndianTradition #RoyalCraftsmanship"
    },
    {
        name: "Blue Pottery",
        region: "Rajasthan",
        description: "Distinctive ceramic craft with blue glazing",
        story: "From the royal kitchens of Jaipur emerges pottery as blue as the eternal sky. Each piece carries the artistic legacy of Persian artisans who found home in Rajasthan, creating treasures that once graced Mughal courts.",
        mythology: "The blue represents the infinite sky of Lord Krishna's realm",
        socialMedia: "🏺 Royal blue pottery from Jaipur's heritage workshops! Each piece echoes the artistic excellence of Mughal courts, crafted with techniques passed down through generations. #BluePottery #RajasthaniCrafts #MughalHeritage"
    }
];

const avatarResponses = [
    "Namaste! I am Kamala, your AI guide to the beautiful world of traditional Indian crafts. This painting technique has been in my family for 12 generations, passed down from mother to daughter like precious heirloom.",
    "The fish you see here represents fertility and good fortune. In our tradition, we paint these during weddings and festivals. Each stroke is made with bamboo sticks and natural pigments we prepare ourselves.",
    "The colors come from turmeric for yellow, indigo for blue, and lamp soot mixed with cow dung for black. These are the same materials used by my ancestors centuries ago.",
    "Madhubani art originated in the Mithila region, now in Bihar and Nepal. Women would paint these beautiful designs on the walls of their homes during special occasions and festivals.",
    "Each symbol in our art has deep meaning. The lotus represents purity, the peacock symbolizes divine love, and the tree of life shows our connection to nature and the divine.",
    "Kanjeevaram silk is considered the queen of all silk sarees. The weaving process can take anywhere from 10 days to 6 months, depending on the intricacy of the design.",
    "The gold threads used in Kanjeevaram sarees are tested for purity. Traditional weavers use real gold and silver threads, which is why these sarees are considered heirloom pieces.",
    "Blue pottery is unique because it uses no clay. Instead, it's made from quartz, raw glaze, and glass. This gives it its distinctive blue color and makes it very durable."
];

// Navigation functionality
function switchSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Add active class to corresponding nav button
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
}

// Navigation button event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            switchSection(section);
        });
    });
    
    // Image upload functionality
    const imageUpload = document.getElementById('imageUpload');
    const fileInput = document.getElementById('fileInput');
    
    if (imageUpload && fileInput) {
        imageUpload.addEventListener('click', function() {
            fileInput.click();
        });
        
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const uploadArea = document.getElementById('imageUpload');
                    uploadArea.innerHTML = `
                        <div class="uploaded-image">
                            <img src="${e.target.result}" alt="Uploaded craft" style="max-width: 100%; max-height: 200px; border-radius: 8px;">
                            <p style="margin-top: 1rem; color: #666;">Image uploaded successfully!</p>
                        </div>
                    `;
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Enter key support for chat
    const userQuestionInput = document.getElementById('userQuestion');
    if (userQuestionInput) {
        userQuestionInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                askAvatar();
            }
        });
    }
});

// AI Story Generation
function generateAIStory() {
    const description = document.getElementById('craftDescription').value.trim();
    const language = document.getElementById('languageSelect').value;
    
    if (!description) {
        alert('Please enter a description of your craft first.');
        return;
    }
    
    // Show loading state
    const generateBtn = document.getElementById('generateStory');
    const originalText = generateBtn.innerHTML;
    generateBtn.innerHTML = 'Generating Story... 🤖';
    generateBtn.disabled = true;
    
    // Simulate AI processing
    setTimeout(() => {
        // Get random craft data for demo
        const randomCraft = sampleCrafts[Math.floor(Math.random() * sampleCrafts.length)];
        
        // Show results
        document.getElementById('storyResults').style.display = 'block';
        
        // Populate results
        document.getElementById('productDescription').innerHTML = `
            <p><strong>Heritage Description:</strong></p>
            <p>${randomCraft.story}</p>
            <br>
            <p><strong>Cultural Significance:</strong></p>
            <p>${randomCraft.mythology}</p>
        `;
        
        document.getElementById('socialMediaPost').innerHTML = `
            <p>${randomCraft.socialMedia}</p>
        `;
        
        document.getElementById('culturalStory').innerHTML = `
            <p><strong>Traditional Craft Story:</strong></p>
            <p>${randomCraft.story} This ${randomCraft.name} from ${randomCraft.region} represents the pinnacle of Indian craftsmanship, where every detail tells a story of cultural heritage and artistic mastery.</p>
            <br>
            <p><strong>Mythological Connection:</strong></p>
            <p>${randomCraft.mythology}</p>
        `;
        
        // Reset button
        generateBtn.innerHTML = originalText;
        generateBtn.disabled = false;
        
        // Scroll to results
        document.getElementById('storyResults').scrollIntoView({ behavior: 'smooth' });
        
    }, 3000);
}

// Avatar Chat Functionality
function askAvatar() {
    const questionInput = document.getElementById('userQuestion');
    const question = questionInput.value.trim();
    
    if (!question) return;
    
    // Add user message
    addMessage(question, 'user');
    
    // Clear input
    questionInput.value = '';
    
    // Simulate AI response delay
    setTimeout(() => {
        const response = getAvatarResponse(question);
        addMessage(response, 'avatar');
    }, 1500);
}

function askQuickQuestion(question) {
    document.getElementById('userQuestion').value = question;
    askAvatar();
}

function addMessage(message, type) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    
    messageDiv.innerHTML = `
        <div class="message-content">
            ${message}
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAvatarResponse(question) {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('madhubani')) {
        return avatarResponses[0] + " " + avatarResponses[1];
    } else if (lowerQuestion.includes('kanjeevaram') || lowerQuestion.includes('silk')) {
        return avatarResponses[5] + " " + avatarResponses[6];
    } else if (lowerQuestion.includes('pottery') || lowerQuestion.includes('blue')) {
        return avatarResponses[7];
    } else if (lowerQuestion.includes('material') || lowerQuestion.includes('color')) {
        return avatarResponses[2];
    } else if (lowerQuestion.includes('meaning') || lowerQuestion.includes('symbol')) {
        return avatarResponses[4];
    } else if (lowerQuestion.includes('history') || lowerQuestion.includes('origin')) {
        return avatarResponses[3];
    } else {
        // Default response
        return "Thank you for your question! " + avatarResponses[Math.floor(Math.random() * avatarResponses.length)];
    }
}

// Language translations (demo data)
const translations = {
    'hi': {
        'Transform Your Craft Into Captivating Stories': 'अपने शिल्प को आकर्षक कहानियों में बदलें',
        'Start Creating Stories': 'कहानियां बनाना शुरू करें',
        'Generate Heritage Story': 'विरासत की कहानी बनाएं'
    },
    'ta': {
        'Transform Your Craft Into Captivating Stories': 'உங்கள் கைவினைப்பொருளை கவர்ச்சிகரமான கதைகளாக மாற்றுங்கள்',
        'Start Creating Stories': 'கதைகளை உருவாக்க தொடங்குங்கள்',
        'Generate Heritage Story': 'பாரம்பரிய கதையை உருவாக்குங்கள்'
    },
    'te': {
        'Transform Your Craft Into Captivating Stories': 'మీ చేతిపనిని ఆకర్షణీయమైన కథలుగా మార్చండి',
        'Start Creating Stories': 'కథలు రూపొందించడం ప్రారంభించండి',
        'Generate Heritage Story': 'వారసత్వ కథను రూపొందించండి'
    }
};

// Utility functions
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function getCurrentDate() {
    return new Date().toLocaleDateString('en-IN');
}

// Animation and interaction enhancements
function addInteractionEffects() {
    // Hover effects for cards
    document.querySelectorAll('.stat-card, .feature-card, .portfolio-item, .analytics-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        });
    });
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Initialize interactions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addInteractionEffects();
    
    // Add typing animation to hero subtitle
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
    
    // Add loading animation to stats
    setTimeout(() => {
        document.querySelectorAll('.stat-number').forEach((stat, index) => {
            const target = stat.textContent;
            stat.textContent = '0';
            
            setTimeout(() => {
                animateNumber(stat, target);
            }, index * 200);
        });
    }, 2000);
});

function animateNumber(element, target) {
    const numericTarget = parseInt(target.replace(/[^\d]/g, ''));
    const suffix = target.replace(/[\d]/g, '');
    let current = 0;
    const increment = numericTarget / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= numericTarget) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 40);
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('KalaKatha Error:', e.error);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('KalaKatha Performance:', {
                loadTime: perfData.loadEventEnd - perfData.loadEventStart,
                domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                totalTime: perfData.loadEventEnd - perfData.fetchStart
            });
        }, 0);
    });
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        switchSection,
        generateAIStory,
        askAvatar,
        getAvatarResponse,
        addMessage
    };
}