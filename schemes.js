// schemes.js - Handles Government Schemes modal functionality

// Schemes data (updated for 2025)
const schemesData = [
    {
        id: 1,
        title: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
        description: 'Direct income support of ₹6,000 per year in three installments to small and marginal farmers.',
        benefits: 'Financial aid for inputs; covers 11 crore+ farmers. Eligible: Landholding farmers (excludes certain categories).',
        category: 'Central',
        applyLink: 'https://pmkisan.gov.in/'
    },
    {
        id: 2,
        title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
        description: 'Crop insurance against natural calamities, pests, and diseases.',
        benefits: 'Low premium (1.5-5%); covers losses up to full sum insured. Eligible: All farmers with crop loans.',
        category: 'Central',
        applyLink: 'https://pmfby.gov.in/'
    },
    {
        id: 3,
        title: 'Kisan Credit Card (KCC)',
        description: 'Short-term credit for crop cultivation and allied activities.',
        benefits: '2% interest subvention + 3% prompt repayment incentive. Limit up to ₹3 lakh.',
        category: 'Central',
        applyLink: 'https://www.bankofindia.co.in/kisan-credit-card'
    },
    {
        id: 4,
        title: 'Soil Health Card Scheme',
        description: 'Provides soil nutrient status and fertilizer recommendations.',
        benefits: 'Free soil testing; improves yield by 10-15%. Covers 5 crore samples by 2025-26.',
        category: 'Central',
        applyLink: 'https://soilhealth.dac.gov.in/'
    },
    {
        id: 5,
        title: 'National Mission on Natural Farming (NMNF)',
        description: 'Promotes chemical-free farming with bio-inputs.',
        benefits: 'Subsidies for seeds/manure; aims 50% coverage by 2025. Reduces costs by 20-30%.',
        category: 'Central',
        applyLink: 'https://agricoop.nic.in/en/national-mission-natural-farming'
    },
    {
        id: 6,
        title: 'Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)',
        description: 'Expands irrigated area and improves water use efficiency.',
        benefits: 'Subsidies up to 55% for micro-irrigation. Targets 10 million ha by 2025.',
        category: 'Central',
        applyLink: 'https://pmksy.gov.in/'
    },
    {
        id: 7,
        title: 'Agriculture Infrastructure Fund (AIF)',
        description: '₹1 lakh crore credit for post-harvest infrastructure.',
        benefits: '3% interest subvention; credit guarantee up to ₹2 crore. For cold storage, warehouses.',
        category: 'Central',
        applyLink: 'https://agriinfra.dac.gov.in/'
    },
    {
        id: 8,
        title: 'Kerala State Farmers Debt Relief Commission (Example State-Level)',
        description: 'Debt waiver and relief for Kerala farmers.',
        benefits: 'Up to ₹1 lakh waiver for small farmers. Focus on crop loans.',
        category: 'State-Level',
        applyLink: 'https://krishi.kerala.gov.in/'
    },
    {
        id: 9,
        title: 'Rashtriya Krishi Vikas Yojana (RKVY)',
        description: 'State-specific projects for agri development.',
        benefits: 'Flexible funding for infrastructure/tech. ₹6,800 crore in 2025.',
        category: 'Central-State',
        applyLink: 'https://rkvy.nic.in/'
    },
    {
        id: 10,
        title: 'National Beekeeping and Honey Mission (NBHM)',
        description: 'Promotes scientific beekeeping and honey production.',
        benefits: 'Subsidies for hives/equipment; doubles production by 2025.',
        category: 'Central',
        applyLink: 'https://nbhm.dac.gov.in/'
    }
];

// Function to populate schemes
function populateSchemes(filter = '') {
    const schemesContainer = document.getElementById('schemesContainer');
    schemesContainer.innerHTML = '';
    const filteredSchemes = schemesData.filter(scheme => !filter || scheme.category === filter);
    
    filteredSchemes.forEach(scheme => {
        const schemeCard = document.createElement('div');
        schemeCard.className = 'scheme-card bg-gray-50 p-4 rounded-lg border border-gray-200';
        schemeCard.innerHTML = `
            <h3 class="text-lg font-bold text-green-900 mb-2" data-i18n="scheme_${scheme.id}_title">${scheme.title}</h3>
            <p class="text-gray-700 mb-3" data-i18n="scheme_${scheme.id}_desc">${scheme.description}</p>
            <p class="text-sm text-gray-600 mb-4" data-i18n="scheme_${scheme.id}_benefits"><strong>Benefits:</strong> ${scheme.benefits}</p>
            <a href="${scheme.applyLink}" target="_blank" class="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700" data-i18n="apply_now">Apply Now</a>
        `;
        schemesContainer.appendChild(schemeCard);
    });

    if (filteredSchemes.length === 0) {
        schemesContainer.innerHTML = '<p class="text-gray-500 text-center">No schemes found for the selected category.</p>';
    }
}

// Initialize schemes modal event listeners
document.addEventListener('DOMContentLoaded', () => {
    const schemesModal = document.getElementById('schemesModal');
    const schemesTrigger = document.getElementById('schemes-trigger');
    const schemeCategory = document.getElementById('schemeCategory');
    const closeModals = document.querySelectorAll('.close-modal');

    // Open modal on schemes trigger click
    schemesTrigger.addEventListener('click', () => {
        schemesModal.classList.remove('hidden');
        document.body.classList.add('modal-open');
        populateSchemes(); // Load all schemes initially
    });

    // Filter schemes by category
    schemeCategory.addEventListener('change', (e) => {
        populateSchemes(e.target.value);
    });

    // Close modals
    closeModals.forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            e.target.closest('.fixed').classList.add('hidden');
            document.body.classList.remove('modal-open');
        });
    });

    // Close modal on outside click
    schemesModal.addEventListener('click', (e) => {
        if (e.target === schemesModal) {
            schemesModal.classList.add('hidden');
            document.body.classList.remove('modal-open');
        }
    });
});