const statesAndDistricts = {
    'Andhra Pradesh': ['Anantapur', 'Annamayya', 'Alluri Sitharama Raju', 'Anakapalli', 'Bapatla', 'Chittoor', 'Dr. B.R. Ambedkar Konaseema', 'East Godavari', 'Eluru', 'Guntur', 'Kakinada', 'Krishna', 'Nandyal', 'NTR', 'Palnadu', 'Parvathipuram Manyam', 'Prakasam', 'Srikakulam', 'Sri Sathya Sai', 'Suryapet', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'YSR Kadapa'],
    'Arunachal Pradesh': ['Anjaw', 'Changlang', 'Dibang Valley', 'East Kameng', 'East Siang', 'Kamle', 'Kra Daadi', 'Kurung Kumey', 'Lepa Rada', 'Lohit', 'Longding', 'Lower Dibang Valley', 'Lower Siang', 'Lower Subansiri', 'Namsai', 'Pakke-Kessang', 'Papum Pare', 'Shi Yomi', 'Siang', 'Tawang', 'Tirap', 'Upper Siang', 'Upper Subansiri', 'West Kameng', 'West Siang'],
    'Assam': ['Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima Hasao', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup Metropolitan', 'Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Morigaon', 'Nagaon', 'Nalbari', 'Sivasagar', 'Sonitpur', 'South Salmara-Mankachar', 'Tinsukia', 'Udalguri', 'West Karbi Anglong'],
    'Bihar': ['Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran'],
    'Chhattisgarh': ['Balod', 'Baloda Bazar', 'Balrampur', 'Bastar', 'Bemetara', 'Bijapur', 'Bilaspur', 'Dantewada', 'Dhamtari', 'Durg', 'Gariaband', 'Gaurela-Pendra-Marwahi', 'Janjgir-Champa', 'Jashpur', 'Kabirdham', 'Kanker', 'Khairagarh-Chhuikhadan-Gandai', 'Kondagaon', 'Korba', 'Korea', 'Mahasamund', 'Manendragarh-Chirmiri-Bharatpur', 'Mohla-Manpur-Ambagarh Chowki', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Sakti', 'Sarangarh-Bilaigarh', 'Sukma', 'Surajpur', 'Surguja'],
    'Goa': ['North Goa', 'South Goa'],
    'Gujarat': ['Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha', 'Bharuch', 'Bhavnagar', 'Botad', 'Chhota Udaipur', 'Dahod', 'Dang', 'Devbhoomi Dwarka', 'Gandhinagar', 'Gir Somnath', 'Jamnagar', 'Junagadh', 'Kachchh', 'Kheda', 'Mahisagar', 'Mehsana', 'Morbi', 'Narmada', 'Navsari', 'Panchmahal', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha', 'Surat', 'Surendranagar', 'Tapi', 'Vadodara', 'Valsad'],
    'Haryana': ['Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurugram', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Nuh', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'],
    'Himachal Pradesh': ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul and Spiti', 'Mandi', 'Shimla', 'Sirmaur', 'Solan', 'Una'],
    'Jharkhand': ['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 'Ramgarh', 'Ranchi', 'Sahibganj', 'Seraikela Kharsawan', 'Simdega', 'West Singhbhum'],
    'Karnataka': ['Bagalkot', 'Ballari', 'Belagavi', 'Bengaluru Rural', 'Bengaluru Urban', 'Bidar', 'Chamarajanagar', 'Chikkaballapur', 'Chikkamagaluru', 'Chitradurga', 'Dakshina Kannada', 'Davangere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Kalaburagi', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysuru', 'Raichur', 'Ramanagara', 'Shivamogga', 'Tumakuru', 'Udupi', 'Uttara Kannada', 'Vijayanagara', 'Vijayapura', 'Yadgir'],
    'Kerala': ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'],
    'Madhya Pradesh': ['Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa', 'Khargone', 'Mandla', 'Mandsaur', 'Morena', 'Narmadapuram', 'Neemuch', 'Niwari', 'Panna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha'],
    'Maharashtra': ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai City', 'Mumbai Suburban', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Osmanabad', 'Palghar', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara', 'Sindhudurg', 'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal'],
    'Manipur': ['Bishnupur', 'Chandel', 'Churachandpur', 'Imphal East', 'Imphal West', 'Jiribam', 'Kakching', 'Kamjong', 'Kangpokpi', 'Noney', 'Pherzawl', 'Senapati', 'Tamenglong', 'Tengnoupal', 'Thoubal', 'Ukhrul'],
    'Meghalaya': ['East Garo Hills', 'East Jaintia Hills', 'East Khasi Hills', 'Eastern West Khasi Hills', 'North Garo Hills', 'Ri Bhoi', 'South Garo Hills', 'South West Garo Hills', 'South West Khasi Hills', 'West Garo Hills', 'West Jaintia Hills', 'West Khasi Hills'],
    'Mizoram': ['Aizawl', 'Champhai', 'Hnahthial', 'Khawzawl', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Saiha', 'Saitual', 'Serchhip'],
    'Nagaland': ['Chumoukedima', 'Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Niuland', 'Noklak', 'Peren', 'Phek', 'Shamator', 'Tuensang', 'Tseminyu', 'Wokha', 'Zunheboto'],
    'Odisha': ['Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack', 'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghpur', 'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur', 'Sundargarh'],
    'Punjab': ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Malerkotla', 'Mansa', 'Moga', 'Pathankot', 'Patiala', 'Rupnagar', 'Sahibzada Ajit Singh Nagar', 'Sangrur', 'Shahid Bhagat Singh Nagar', 'Sri Muktsar Sahib', 'Tarn Taran'],
    'Rajasthan': ['Ajmer', 'Alwar', 'Anupgarh', 'Balotra', 'Banswara', 'Baran', 'Barmer', 'Beawar', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Deeg', 'Dholpur', 'Dudu', 'Dungarpur', 'Ganganagar', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kekri', 'Khairthal-Tijara', 'Kota', 'Nagaur', 'Neem ka Thana', 'Pali', 'Phalodi', 'Pratapgarh', 'Rajsamand', 'Salumbar', 'Sanchore', 'Sawai Madhopur', 'Shahpura', 'Sikar', 'Sirohi', 'Tonk', 'Udaipur'],
    'Sikkim': ['Gangtok', 'Gyalshing', 'Mangan', 'Namchi', 'Pakyong', 'Soreng'],
    'Tamil Nadu': ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kancheepuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'],
    'Telangana': ['Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhupalpally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 'Kumuram Bheem', 'Mahabubabad', 'Mahbubnagar', 'Mancherial', 'Medak', 'Medchal-Malkajgiri', 'Mulugu', 'Nagarkurnool', 'Nalgonda', 'Narayanpet', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Rangareddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal', 'Hanamkonda', 'Yadadri Bhuvanagiri'],
    'Tripura': ['Dhalai', 'Gomati', 'Khowai', 'North Tripura', 'Sepahijala', 'South Tripura', 'Unakoti', 'West Tripura'],
    'Uttar Pradesh': ['Agra', 'Aligarh', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Ayodhya', 'Azamgarh', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kushinagar', 'Lakhimpur Kheri', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarpur', 'Pilibhit', 'Pratapgarh', 'Prayagraj', 'Raebareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar', 'Shahjahanpur', 'Shamli', 'Shravasti', 'Siddharthnagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'],
    'Uttarakhand': ['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'],
    'West Bengal': ['Alipurduar', 'Bankura', 'Birbhum', 'Cooch Behar', 'Dakshin Dinajpur', 'Darjeeling', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 'Kolkata', 'Maldah', 'Murshidabad', 'Nadia', 'North 24 Parganas', 'Paschim Bardhaman', 'Paschim Medinipur', 'Purba Bardhaman', 'Purba Medinipur', 'Purulia', 'South 24 Parganas', 'Uttar Dinajpur'],
    'Andaman and Nicobar Islands': ['Nicobar', 'North and Middle Andaman', 'South Andaman'],
    'Chandigarh': ['Chandigarh'],
    'Dadra and Nagar Haveli and Daman and Diu': ['Daman', 'Diu', 'Dadra and Nagar Haveli'],
    'Delhi': ['Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 'North East Delhi', 'North West Delhi', 'Shahdara', 'South Delhi', 'South East Delhi', 'South West Delhi', 'West Delhi'],
    'Jammu and Kashmir': ['Anantnag', 'Bandipora', 'Baramulla', 'Budgam', 'Doda', 'Ganderbal', 'Jammu', 'Kathua', 'Kishtwar', 'Kulgam', 'Kupwara', 'Poonch', 'Pulwama', 'Rajouri', 'Ramban', 'Reasi', 'Samba', 'Shopian', 'Srinagar', 'Udhampur'],
    'Ladakh': ['Kargil', 'Leh'],
    'Lakshadweep': ['Lakshadweep'],
    'Puducherry': ['Karaikal', 'Mahe', 'Puducherry', 'Yanam']
};

const contacts = {
    'Andhra Pradesh': {
        'Anantapur': [
            { name: 'Amit Kumar', designation: 'District Agriculture Officer', phone: '+91-9481234567', email: 'amit.kumar@agri.ap.gov.in', address: 'District Agriculture Office, Anantapur, Andhra Pradesh, PIN: 515001' },
            { name: 'Priya Sharma', designation: 'Assistant Director', phone: '+91-9481234568', email: 'priya.sharma@agri.ap.gov.in', address: 'Central Agriculture Office, Anantapur, Andhra Pradesh, PIN: 515002' }
        ],
        'Chittoor': [
            { name: 'Ravi Kumar', designation: 'District Agriculture Officer', phone: '+91-9481234571', email: 'ravi.kumar@agri.ap.gov.in', address: 'District Agriculture Office, Chittoor, Andhra Pradesh, PIN: 517001' }
        ],
        'East Godavari': [
            { name: 'Lakshmi Narayana', designation: 'District Agriculture Officer', phone: '+91-9481234572', email: 'lakshmi.narayana@agri.ap.gov.in', address: 'District Agriculture Office, East Godavari, Andhra Pradesh, PIN: 533001' }
        ],
        'Guntur': [
            { name: 'Srinivas Rao', designation: 'District Agriculture Officer', phone: '+91-9481234573', email: 'srinivas.rao@agri.ap.gov.in', address: 'District Agriculture Office, Guntur, Andhra Pradesh, PIN: 522002' }
        ],
        'Krishna': [
            { name: 'Vijaya Lakshmi', designation: 'District Agriculture Officer', phone: '+91-9481234574', email: 'vijaya.lakshmi@agri.ap.gov.in', address: 'District Agriculture Office, Krishna, Andhra Pradesh, PIN: 520001' }
        ],
        'Visakhapatnam': [
            { name: 'Kiran Kumar', designation: 'District Agriculture Officer', phone: '+91-9481234575', email: 'kiran.kumar@agri.ap.gov.in', address: 'District Agriculture Office, Visakhapatnam, Andhra Pradesh, PIN: 530001' }
        ],
        'YSR Kadapa': [
            { name: 'Sneha Reddy', designation: 'Horticulture Officer', phone: '+91-9481234570', email: 'sneha.reddy@agri.ap.gov.in', address: 'District Agriculture Office, YSR Kadapa, Andhra Pradesh, PIN: 516003' }
        ]
    },
    'Arunachal Pradesh': {
        'Anjaw': [
            { name: 'Tenzing Norbu', designation: 'District Agriculture Officer', phone: '+91-9401234501', email: 'tenzing.norbu@agri.arun.gov.in', address: 'District Agriculture Office, Anjaw, Arunachal Pradesh, PIN: 792104' }
        ],
        'Changlang': [
            { name: 'Wangdi Lama', designation: 'District Agriculture Officer', phone: '+91-9401234502', email: 'wangdi.lama@agri.arun.gov.in', address: 'District Agriculture Office, Changlang, Arunachal Pradesh, PIN: 792120' }
        ],
        'East Siang': [
            { name: 'Mina Tamang', designation: 'District Agriculture Officer', phone: '+91-9401234503', email: 'mina.tamang@agri.arun.gov.in', address: 'District Agriculture Office, East Siang, Arunachal Pradesh, PIN: 791102' }
        ],
        'Lohit': [
            { name: 'Arun Chetry', designation: 'District Agriculture Officer', phone: '+91-9401234504', email: 'arun.chetry@agri.arun.gov.in', address: 'District Agriculture Office, Lohit, Arunachal Pradesh, PIN: 792001' }
        ],
        'Tawang': [
            { name: 'Lobsang Tsering', designation: 'District Agriculture Officer', phone: '+91-9401234505', email: 'lobsang.tsering@agri.arun.gov.in', address: 'District Agriculture Office, Tawang, Arunachal Pradesh, PIN: 790104' }
        ]
    },
    'Assam': {
        'Barpeta': [
            { name: 'Anil Baruah', designation: 'District Agriculture Officer', phone: '+91-9435123451', email: 'anil.baruah@agri.assam.gov.in', address: 'District Agriculture Office, Barpeta, Assam, PIN: 781301' }
        ],
        'Cachar': [
            { name: 'Rita Gogoi', designation: 'District Agriculture Officer', phone: '+91-9435123452', email: 'rita.gogoi@agri.assam.gov.in', address: 'District Agriculture Office, Cachar, Assam, PIN: 788001' }
        ],
        'Dibrugarh': [
            { name: 'Pranab Saikia', designation: 'District Agriculture Officer', phone: '+91-9435123453', email: 'pranab.saikia@agri.assam.gov.in', address: 'District Agriculture Office, Dibrugarh, Assam, PIN: 786001' }
        ],
        'Goalpara': [
            { name: 'Jyoti Das', designation: 'District Agriculture Officer', phone: '+91-9435123454', email: 'jyoti.das@agri.assam.gov.in', address: 'District Agriculture Office, Goalpara, Assam, PIN: 783101' }
        ],
        'Jorhat': [
            { name: 'Mridul Hazarika', designation: 'District Agriculture Officer', phone: '+91-9435123455', email: 'mridul.hazarika@agri.assam.gov.in', address: 'District Agriculture Office, Jorhat, Assam, PIN: 785001' }
        ]
    },
    'Bihar': {
        'Aurangabad': [
            { name: 'Vikram Singh', designation: 'District Agriculture Officer', phone: '+91-9471007201', email: 'vikram.singh@agri.bihar.gov.in', address: 'District Agriculture Office, Aurangabad, Bihar, PIN: 824101' }
        ],
        'Bhagalpur': [
            { name: 'Neha Kumari', designation: 'District Agriculture Officer', phone: '+91-9471007202', email: 'neha.kumari@agri.bihar.gov.in', address: 'District Agriculture Office, Bhagalpur, Bihar, PIN: 812001' }
        ],
        'Gaya': [
            { name: 'Rajesh Kumar', designation: 'District Agriculture Officer', phone: '+91-9471007203', email: 'rajesh.kumar@agri.bihar.gov.in', address: 'District Agriculture Office, Gaya, Bihar, PIN: 823001' }
        ],
        'Muzaffarpur': [
            { name: 'Anita Verma', designation: 'District Agriculture Officer', phone: '+91-9471007204', email: 'anita.verma@agri.bihar.gov.in', address: 'District Agriculture Office, Muzaffarpur, Bihar, PIN: 842001' }
        ],
        'Patna': [
            { name: 'Sanjay Yadav', designation: 'District Agriculture Officer', phone: '+91-9471007205', email: 'sanjay.yadav@agri.bihar.gov.in', address: 'District Agriculture Office, Patna, Bihar, PIN: 800001' }
        ]
    },
    'Chhattisgarh': {
        'Bilaspur': [
            { name: 'Manoj Sahu', designation: 'District Agriculture Officer', phone: '+91-7752123401', email: 'manoj.sahu@agri.cg.gov.in', address: 'District Agriculture Office, Bilaspur, Chhattisgarh, PIN: 495001' }
        ],
        'Durg': [
            { name: 'Rekha Patel', designation: 'District Agriculture Officer', phone: '+91-7752123402', email: 'rekha.patel@agri.cg.gov.in', address: 'District Agriculture Office, Durg, Chhattisgarh, PIN: 491001' }
        ],
        'Raipur': [
            { name: 'Vinod Sharma', designation: 'District Agriculture Officer', phone: '+91-7752123403', email: 'vinod.sharma@agri.cg.gov.in', address: 'District Agriculture Office, Raipur, Chhattisgarh, PIN: 492001' }
        ],
        'Rajnandgaon': [
            { name: 'Sunita Dewangan', designation: 'District Agriculture Officer', phone: '+91-7752123404', email: 'sunita.dewangan@agri.cg.gov.in', address: 'District Agriculture Office, Rajnandgaon, Chhattisgarh, PIN: 491441' }
        ],
        'Surguja': [
            { name: 'Arvind Kumar', designation: 'District Agriculture Officer', phone: '+91-7752123405', email: 'arvind.kumar@agri.cg.gov.in', address: 'District Agriculture Office, Surguja, Chhattisgarh, PIN: 497001' }
        ]
    },
    'Goa': {
        'North Goa': [
            { name: 'Rohan Naik', designation: 'District Agriculture Officer', phone: '+91-8322234501', email: 'rohan.naik@agri.goa.gov.in', address: 'District Agriculture Office, North Goa, Goa, PIN: 403001' }
        ],
        'South Goa': [
            { name: 'Priya Desai', designation: 'District Agriculture Officer', phone: '+91-8322234502', email: 'priya.desai@agri.goa.gov.in', address: 'District Agriculture Office, South Goa, Goa, PIN: 403601' }
        ]
    },
    'Gujarat': {
        'Ahmedabad': [
            { name: 'Ketan Patel', designation: 'District Agriculture Officer', phone: '+91-792234501', email: 'ketan.patel@agri.guj.gov.in', address: 'District Agriculture Office, Ahmedabad, Gujarat, PIN: 380001' }
        ],
        'Gandhinagar': [
            { name: 'Meena Shah', designation: 'District Agriculture Officer', phone: '+91-792234502', email: 'meena.shah@agri.guj.gov.in', address: 'District Agriculture Office, Gandhinagar, Gujarat, PIN: 382010' }
        ],
        'Rajkot': [
            { name: 'Vijay Jadeja', designation: 'District Agriculture Officer', phone: '+91-792234503', email: 'vijay.jadeja@agri.guj.gov.in', address: 'District Agriculture Office, Rajkot, Gujarat, PIN: 360001' }
        ],
        'Surat': [
            { name: 'Anjali Desai', designation: 'District Agriculture Officer', phone: '+91-792234504', email: 'anjali.desai@agri.guj.gov.in', address: 'District Agriculture Office, Surat, Gujarat, PIN: 395003' }
        ],
        'Vadodara': [
            { name: 'Rahul Parmar', designation: 'District Agriculture Officer', phone: '+91-792234505', email: 'rahul.parmar@agri.guj.gov.in', address: 'District Agriculture Office, Vadodara, Gujarat, PIN: 390001' }
        ]
    },
    'Haryana': {
        'Ambala': [
            { name: 'Suresh Malik', designation: 'District Agriculture Officer', phone: '+91-1712234501', email: 'suresh.malik@agri.hry.gov.in', address: 'District Agriculture Office, Ambala, Haryana, PIN: 133001' }
        ],
        'Faridabad': [
            { name: 'Neetu Sharma', designation: 'District Agriculture Officer', phone: '+91-1712234502', email: 'neetu.sharma@agri.hry.gov.in', address: 'District Agriculture Office, Faridabad, Haryana, PIN: 121001' }
        ],
        'Gurugram': [
            { name: 'Vikram Singh', designation: 'District Agriculture Officer', phone: '+91-1712234503', email: 'vikram.singh@agri.hry.gov.in', address: 'District Agriculture Office, Gurugram, Haryana, PIN: 122001' }
        ],
        'Hisar': [
            { name: 'Poonam Yadav', designation: 'District Agriculture Officer', phone: '+91-1712234504', email: 'poonam.yadav@agri.hry.gov.in', address: 'District Agriculture Office, Hisar, Haryana, PIN: 125001' }
        ],
        'Karnal': [
            { name: 'Rakesh Kumar', designation: 'District Agriculture Officer', phone: '+91-1712234505', email: 'rakesh.kumar@agri.hry.gov.in', address: 'District Agriculture Office, Karnal, Haryana, PIN: 132001' }
        ]
    },
    'Himachal Pradesh': {
        'Bilaspur': [
            { name: 'Anil Thakur', designation: 'District Agriculture Officer', phone: '+91-19782234501', email: 'anil.thakur@agri.hp.gov.in', address: 'District Agriculture Office, Bilaspur, Himachal Pradesh, PIN: 174001' }
        ],
        'Kangra': [
            { name: 'Reena Sharma', designation: 'District Agriculture Officer', phone: '+91-19782234502', email: 'reena.sharma@agri.hp.gov.in', address: 'District Agriculture Office, Kangra, Himachal Pradesh, PIN: 176001' }
        ],
        'Mandi': [
            { name: 'Vijay Singh', designation: 'District Agriculture Officer', phone: '+91-19782234503', email: 'vijay.singh@agri.hp.gov.in', address: 'District Agriculture Office, Mandi, Himachal Pradesh, PIN: 175001' }
        ],
        'Shimla': [
            { name: 'Priya Verma', designation: 'District Agriculture Officer', phone: '+91-19782234504', email: 'priya.verma@agri.hp.gov.in', address: 'District Agriculture Office, Shimla, Himachal Pradesh, PIN: 171001' }
        ],
        'Solan': [
            { name: 'Rahul Negi', designation: 'District Agriculture Officer', phone: '+91-19782234505', email: 'rahul.negi@agri.hp.gov.in', address: 'District Agriculture Office, Solan, Himachal Pradesh, PIN: 173212' }
        ]
    },
    'Jharkhand': {
        'Bokaro': [
            { name: 'Sanjay Mahto', designation: 'District Agriculture Officer', phone: '+91-6542234501', email: 'sanjay.mahto@agri.jh.gov.in', address: 'District Agriculture Office, Bokaro, Jharkhand, PIN: 827001' }
        ],
        'Dhanbad': [
            { name: 'Rita Kumari', designation: 'District Agriculture Officer', phone: '+91-6542234502', email: 'rita.kumari@agri.jh.gov.in', address: 'District Agriculture Office, Dhanbad, Jharkhand, PIN: 826001' }
        ],
        'Ranchi': [
            { name: 'Vikash Kumar', designation: 'District Agriculture Officer', phone: '+91-6542234503', email: 'vikash.kumar@agri.jh.gov.in', address: 'District Agriculture Office, Ranchi, Jharkhand, PIN: 834001' }
        ],
        'Hazaribagh': [
            { name: 'Anjali Singh', designation: 'District Agriculture Officer', phone: '+91-6542234504', email: 'anjali.singh@agri.jh.gov.in', address: 'District Agriculture Office, Hazaribagh, Jharkhand, PIN: 825301' }
        ],
        'Palamu': [
            { name: 'Rakesh Yadav', designation: 'District Agriculture Officer', phone: '+91-6542234505', email: 'rakesh.yadav@agri.jh.gov.in', address: 'District Agriculture Office, Palamu, Jharkhand, PIN: 822101' }
        ]
    },
    'Karnataka': {
        'Bengaluru Urban': [
            { name: 'Suresh Gowda', designation: 'District Agriculture Officer', phone: '+91-802234501', email: 'suresh.gowda@agri.kar.gov.in', address: 'District Agriculture Office, Bengaluru Urban, Karnataka, PIN: 560001' }
        ],
        'Mysuru': [
            { name: 'Latha Ramesh', designation: 'District Agriculture Officer', phone: '+91-802234502', email: 'latha.ramesh@agri.kar.gov.in', address: 'District Agriculture Office, Mysuru, Karnataka, PIN: 570001' }
        ],
        'Belagavi': [
            { name: 'Vinay Patil', designation: 'District Agriculture Officer', phone: '+91-802234503', email: 'vinay.patil@agri.kar.gov.in', address: 'District Agriculture Office, Belagavi, Karnataka, PIN: 590001' }
        ],
        'Tumakuru': [
            { name: 'Anita Shetty', designation: 'District Agriculture Officer', phone: '+91-802234504', email: 'anita.shetty@agri.kar.gov.in', address: 'District Agriculture Office, Tumakuru, Karnataka, PIN: 572101' }
        ],
        'Dakshina Kannada': [
            { name: 'Ravi Kumar', designation: 'District Agriculture Officer', phone: '+91-802234505', email: 'ravi.kumar@agri.kar.gov.in', address: 'District Agriculture Office, Dakshina Kannada, Karnataka, PIN: 575001' }
        ]
    },
    'Kerala': {
        'Thiruvananthapuram': [
            { name: 'Dr. C. Thulasi', designation: 'District Agriculture Officer', phone: '+91-9383470700', email: 'paotvpm.agri@kerala.gov.in', address: 'O/o District Agriculture Officer, Civil Station, Kudappanakunnu, Thiruvananthapuram -695043, Kerala' }
        ],
        'Kollam': [
            { name: 'Dr. S. Sreedevi', designation: 'District Agriculture Officer', phone: '+91-8281280001', email: 'principalaokollam@gmail.com', address: 'O/o District Agriculture Officer, Civil Station, Kollam-691013, Kerala' }
        ],
        'Pathanamthitta': [
            { name: 'Dr. V. S. Saji', designation: 'District Agriculture Officer', phone: '+91-9447900001', email: 'dhmpathanamthitta@gmail.com', address: 'O/o District Agriculture Officer, Mini Civil Station, Pathanamthitta -689645, Kerala' }
        ],
        'Alappuzha': [
            { name: 'Dr. K. G. Saji', designation: 'District Agriculture Officer', phone: '+91-9447900002', email: 'ddshmalp@gmail.com', address: 'O/o District Agriculture Officer, Civil Station, Alappuzha -688001, Kerala' }
        ],
        'Kottayam': [
            { name: 'Dr. P. V. Soman', designation: 'District Agriculture Officer', phone: '+91-9447900003', email: 'dhmkottayam@gmail.com', address: 'O/o District Agriculture Officer, Civil Station, Kottayam -686001, Kerala' }
        ],
        'Ernakulam': [
            { name: 'Dr. M. S. Jisha', designation: 'District Agriculture Officer', phone: '+91-9447900004', email: 'dhmekm@gmail.com', address: 'O/o District Agriculture Officer, Civil Station, Ernakulam -682030, Kerala' }
        ],
        'Idukki': [
            { name: 'Dr. K. R. Bindu', designation: 'District Agriculture Officer', phone: '+91-9447900005', email: 'shmidk@gmail.com', address: 'O/o District Agriculture Officer, Mini Civil Station, Thodupuzha, Idukki -685601, Kerala' }
        ],
        'Thrissur': [
            { name: 'Dr. T. P. Joseph', designation: 'District Agriculture Officer', phone: '+91-9447900006', email: 'shmtsr@gmail.com', address: 'O/o District Agriculture Officer, Agricultural Complex, Chembukkavu, Thrissur -680020, Kerala' }
        ],
        'Palakkad': [
            { name: 'Dr. R. Rajendran', designation: 'District Agriculture Officer', phone: '+91-9447900007', email: 'shmpkd09@gmail.com', address: 'O/o District Agriculture Officer, Civil Station, Palakkad -678001, Kerala' }
        ],
        'Malappuram': [
            { name: 'Dr. A. M. Nazeer', designation: 'District Agriculture Officer', phone: '+91-9447900008', email: 'shmmalappuram@gmail.com', address: 'O/o District Agriculture Officer, Civil Station, Malappuram -676505, Kerala' }
        ],
        'Kozhikode': [
            { name: 'Dr. P. V. Abdul Jabbar', designation: 'District Agriculture Officer', phone: '+91-9383471900', email: 'paokzd@gmail.com', address: 'O/o District Agriculture Officer, Civil Station, Kozhikode -673020, Kerala' }
        ],
        'Wayanad': [
            { name: 'Dr. K. C. Saji', designation: 'District Agriculture Officer', phone: '+91-9447900009', email: 'ddahwayd@gmail.com', address: 'O/o District Agriculture Officer, Ammus Complex, Kalpetta, Wayanad -673121, Kerala' }
        ],
        'Kannur': [
            { name: 'Dr. P. K. Satheesh', designation: 'District Agriculture Officer', phone: '+91-9447900010', email: 'ddahknr@gmail.com', address: 'O/o District Agriculture Officer, Civil Station, Kannur -670002, Kerala' }
        ],
        'Kasaragod': [
            { name: 'Dr. M. K. Rajan', designation: 'District Agriculture Officer', phone: '+91-9447900011', email: 'ddahksd@gmail.com', address: 'O/o District Agriculture Officer, Civil Station, Kasargod -671123, Kerala' }
        ]
    },
    'Madhya Pradesh': {
        'Bhopal': [
            { name: 'Arvind Sharma', designation: 'District Agriculture Officer', phone: '+91-7552234501', email: 'arvind.sharma@agri.mp.gov.in', address: 'District Agriculture Office, Bhopal, Madhya Pradesh, PIN: 462001' }
        ],
        'Gwalior': [
            { name: 'Neha Jain', designation: 'District Agriculture Officer', phone: '+91-7552234502', email: 'neha.jain@agri.mp.gov.in', address: 'District Agriculture Office, Gwalior, Madhya Pradesh, PIN: 474001' }
        ],
        'Indore': [
            { name: 'Rahul Verma', designation: 'District Agriculture Officer', phone: '+91-7552234503', email: 'rahul.verma@agri.mp.gov.in', address: 'District Agriculture Office, Indore, Madhya Pradesh, PIN: 452001' }
        ],
        'Jabalpur': [
            { name: 'Suman Patel', designation: 'District Agriculture Officer', phone: '+91-7552234504', email: 'suman.patel@agri.mp.gov.in', address: 'District Agriculture Office, Jabalpur, Madhya Pradesh, PIN: 482001' }
        ],
        'Ujjain': [
            { name: 'Vikas Singh', designation: 'District Agriculture Officer', phone: '+91-7552234505', email: 'vikas.singh@agri.mp.gov.in', address: 'District Agriculture Office, Ujjain, Madhya Pradesh, PIN: 456001' }
        ]
    },
    'Maharashtra': {
        'Pune': [
            { name: 'Rajesh Patil', designation: 'District Agriculture Officer', phone: '+91-9823456789', email: 'rajesh.patil@agri.maharashtra.gov.in', address: 'District Agriculture Office, Pune, Maharashtra, PIN: 411001' }
        ],
        'Mumbai City': [
            { name: 'Anita Desai', designation: 'Agricultural Extension Officer', phone: '+91-9823456790', email: 'anita.desai@agri.maharashtra.gov.in', address: 'Urban Agriculture Office, Mumbai, Maharashtra, PIN: 400001' }
        ],
        'Nagpur': [
            { name: 'Vijay Shinde', designation: 'District Agriculture Officer', phone: '+91-9823456791', email: 'vijay.shinde@agri.maharashtra.gov.in', address: 'District Agriculture Office, Nagpur, Maharashtra, PIN: 440001' }
        ],
        'Aurangabad': [
            { name: 'Sunita Pawar', designation: 'District Agriculture Officer', phone: '+91-9823456792', email: 'sunita.pawar@agri.maharashtra.gov.in', address: 'District Agriculture Office, Aurangabad, Maharashtra, PIN: 431001' }
        ],
        'Nashik': [
            { name: 'Rakesh More', designation: 'District Agriculture Officer', phone: '+91-9823456793', email: 'rakesh.more@agri.maharashtra.gov.in', address: 'District Agriculture Office, Nashik, Maharashtra, PIN: 422001' }
        ]
    },
    'Manipur': {
        'Imphal West': [
            { name: 'Thoiba Singh', designation: 'District Agriculture Officer', phone: '+91-3852234501', email: 'thoiba.singh@agri.manipur.gov.in', address: 'District Agriculture Office, Imphal West, Manipur, PIN: 795001' }
        ],
        'Bishnupur': [
            { name: 'Lina Devi', designation: 'District Agriculture Officer', phone: '+91-3852234502', email: 'lina.devi@agri.manipur.gov.in', address: 'District Agriculture Office, Bishnupur, Manipur, PIN: 795126' }
        ],
        'Thoubal': [
            { name: 'Rajesh Meitei', designation: 'District Agriculture Officer', phone: '+91-3852234503', email: 'rajesh.meitei@agri.manipur.gov.in', address: 'District Agriculture Office, Thoubal, Manipur, PIN: 795138' }
        ],
        'Churachandpur': [
            { name: 'Mary Vung', designation: 'District Agriculture Officer', phone: '+91-3852234504', email: 'mary.vung@agri.manipur.gov.in', address: 'District Agriculture Office, Churachandpur, Manipur, PIN: 795128' }
        ],
        'Senapati': [
            { name: 'John Haokip', designation: 'District Agriculture Officer', phone: '+91-3852234505', email: 'john.haokip@agri.manipur.gov.in', address: 'District Agriculture Office, Senapati, Manipur, PIN: 795106' }
        ]
    },
    'Meghalaya': {
        'East Khasi Hills': [
            { name: 'Patricia Lyngdoh', designation: 'District Agriculture Officer', phone: '+91-3642234501', email: 'patricia.lyngdoh@agri.megh.gov.in', address: 'District Agriculture Office, East Khasi Hills, Meghalaya, PIN: 793001' }
        ],
        'West Garo Hills': [
            { name: 'John Sangma', designation: 'District Agriculture Officer', phone: '+91-3642234502', email: 'john.sangma@agri.megh.gov.in', address: 'District Agriculture Office, West Garo Hills, Meghalaya, PIN: 794001' }
        ],
        'Ri Bhoi': [
            { name: 'Mary Nongrum', designation: 'District Agriculture Officer', phone: '+91-3642234503', email: 'mary.nongrum@agri.megh.gov.in', address: 'District Agriculture Office, Ri Bhoi, Meghalaya, PIN: 793101' }
        ],
        'West Jaintia Hills': [
            { name: 'David Rymbai', designation: 'District Agriculture Officer', phone: '+91-3642234504', email: 'david.rymbai@agri.megh.gov.in', address: 'District Agriculture Office, West Jaintia Hills, Meghalaya, PIN: 793150' }
        ],
        'South Garo Hills': [
            { name: 'Rita Marak', designation: 'District Agriculture Officer', phone: '+91-3642234505', email: 'rita.marak@agri.megh.gov.in', address: 'District Agriculture Office, South Garo Hills, Meghalaya, PIN: 794102' }
        ]
    },
    'Mizoram': {
        'Aizawl': [
            { name: 'Lalrin Zuala', designation: 'District Agriculture Officer', phone: '+91-3892234501', email: 'lalrin.zuala@agri.mizoram.gov.in', address: 'District Agriculture Office, Aizawl, Mizoram, PIN: 796001' }
        ],
        'Lunglei': [
            { name: 'Vanlal Puii', designation: 'District Agriculture Officer', phone: '+91-3892234502', email: 'vanlal.puii@agri.mizoram.gov.in', address: 'District Agriculture Office, Lunglei, Mizoram, PIN: 796701' }
        ],
        'Champhai': [
            { name: 'Hming Thanga', designation: 'District Agriculture Officer', phone: '+91-3892234503', email: 'hming.thanga@agri.mizoram.gov.in', address: 'District Agriculture Office, Champhai, Mizoram, PIN: 796321' }
        ],
        'Kolasib': [
            { name: 'Zoram Pari', designation: 'District Agriculture Officer', phone: '+91-3892234504', email: 'zoram.pari@agri.mizoram.gov.in', address: 'District Agriculture Office, Kolasib, Mizoram, PIN: 796081' }
        ],
        'Serchhip': [
            { name: 'Lalbiak Zama', designation: 'District Agriculture Officer', phone: '+91-3892234505', email: 'lalbiak.zama@agri.mizoram.gov.in', address: 'District Agriculture Office, Serchhip, Mizoram, PIN: 796181' }
        ]
    },
    'Nagaland': {
        'Kohima': [
            { name: 'Kevichusa Ao', designation: 'District Agriculture Officer', phone: '+91-3702234501', email: 'kevichusa.ao@agri.nagaland.gov.in', address: 'District Agriculture Office, Kohima, Nagaland, PIN: 797001' }
        ],
        'Dimapur': [
            { name: 'Temsu Longkumer', designation: 'District Agriculture Officer', phone: '+91-3702234502', email: 'temsu.longkumer@agri.nagaland.gov.in', address: 'District Agriculture Office, Dimapur, Nagaland, PIN: 797112' }
        ],
        'Mokokchung': [
            { name: 'Imli Jamir', designation: 'District Agriculture Officer', phone: '+91-3702234503', email: 'imli.jamir@agri.nagaland.gov.in', address: 'District Agriculture Office, Mokokchung, Nagaland, PIN: 798601' }
        ],
        'Wokha': [
            { name: 'Renben Lotha', designation: 'District Agriculture Officer', phone: '+91-3702234504', email: 'renben.lotha@agri.nagaland.gov.in', address: 'District Agriculture Office, Wokha, Nagaland, PIN: 797111' }
        ],
        'Tuensang': [
            { name: 'Yanger Aier', designation: 'District Agriculture Officer', phone: '+91-3702234505', email: 'yanger.aier@agri.nagaland.gov.in', address: 'District Agriculture Office, Tuensang, Nagaland, PIN: 798612' }
        ]
    },
    'Odisha': {
        'Cuttack': [
            { name: 'Suresh Behera', designation: 'District Agriculture Officer', phone: '+91-6712234501', email: 'suresh.behera@agri.odisha.gov.in', address: 'District Agriculture Office, Cuttack, Odisha, PIN: 753001' }
        ],
        'Khordha': [
            { name: 'Anita Sahoo', designation: 'District Agriculture Officer', phone: '+91-6712234502', email: 'anita.sahoo@agri.odisha.gov.in', address: 'District Agriculture Office, Khordha, Odisha, PIN: 751001' }
        ],
        'Ganjam': [
            { name: 'Ramesh Patnaik', designation: 'District Agriculture Officer', phone: '+91-6712234503', email: 'ramesh.patnaik@agri.odisha.gov.in', address: 'District Agriculture Office, Ganjam, Odisha, PIN: 760001' }
        ],
        'Mayurbhanj': [
            { name: 'Sunita Mohanty', designation: 'District Agriculture Officer', phone: '+91-6712234504', email: 'sunita.mohanty@agri.odisha.gov.in', address: 'District Agriculture Office, Mayurbhanj, Odisha, PIN: 757001' }
        ],
        'Sambalpur': [
            { name: 'Vikram Das', designation: 'District Agriculture Officer', phone: '+91-6712234505', email: 'vikram.das@agri.odisha.gov.in', address: 'District Agriculture Office, Sambalpur, Odisha, PIN: 768001' }
        ]
    },
    'Punjab': {
        'Amritsar': [
            { name: 'Gurpreet Singh', designation: 'District Agriculture Officer', phone: '+91-1832234501', email: 'gurpreet.singh@agri.punjab.gov.in', address: 'District Agriculture Office, Amritsar, Punjab, PIN: 143001' }
        ],
        'Ludhiana': [
            { name: 'Harpreet Kaur', designation: 'District Agriculture Officer', phone: '+91-1832234502', email: 'harpreet.kaur@agri.punjab.gov.in', address: 'District Agriculture Office, Ludhiana, Punjab, PIN: 141001' }
        ],
        'Patiala': [
            { name: 'Ranjit Singh', designation: 'District Agriculture Officer', phone: '+91-1832234503', email: 'ranjit.singh@agri.punjab.gov.in', address: 'District Agriculture Office, Patiala, Punjab, PIN: 147001' }
        ],
        'Jalandhar': [
            { name: 'Manpreet Kaur', designation: 'District Agriculture Officer', phone: '+91-1832234504', email: 'manpreet.kaur@agri.punjab.gov.in', address: 'District Agriculture Office, Jalandhar, Punjab, PIN: 144001' }
        ],
        'Bathinda': [
            { name: 'Amarjeet Singh', designation: 'District Agriculture Officer', phone: '+91-1832234505', email: 'amarjeet.singh@agri.punjab.gov.in', address: 'District Agriculture Office, Bathinda, Punjab, PIN: 151001' }
        ]
    },
    'Rajasthan': {
        'Jaipur': [
            { name: 'Vikram Rathore', designation: 'District Agriculture Officer', phone: '+91-1412234501', email: 'vikram.rathore@agri.raj.gov.in', address: 'District Agriculture Office, Jaipur, Rajasthan, PIN: 302001' }
        ],
        'Jodhpur': [
            { name: 'Sunita Sharma', designation: 'District Agriculture Officer', phone: '+91-1412234502', email: 'sunita.sharma@agri.raj.gov.in', address: 'District Agriculture Office, Jodhpur, Rajasthan, PIN: 342001' }
        ],
        'Udaipur': [
            { name: 'Rakesh Meena', designation: 'District Agriculture Officer', phone: '+91-1412234503', email: 'rakesh.meena@agri.raj.gov.in', address: 'District Agriculture Office, Udaipur, Rajasthan, PIN: 313001' }
        ],
        'Bikaner': [
            { name: 'Anita Choudhary', designation: 'District Agriculture Officer', phone: '+91-1412234504', email: 'anita.choudhary@agri.raj.gov.in', address: 'District Agriculture Office, Bikaner, Rajasthan, PIN: 334001' }
        ],
        'Ajmer': [
            { name: 'Rahul Singh', designation: 'District Agriculture Officer', phone: '+91-1412234505', email: 'rahul.singh@agri.raj.gov.in', address: 'District Agriculture Office, Ajmer, Rajasthan, PIN: 305001' }
        ]
    },
    'Sikkim': {
        'Gangtok': [
            { name: 'Tashi Lepcha', designation: 'District Agriculture Officer', phone: '+91-3592234501', email: 'tashi.lepcha@agri.sikkim.gov.in', address: 'District Agriculture Office, Gangtok, Sikkim, PIN: 737101' }
        ],
        'Namchi': [
            { name: 'Pema Sherpa', designation: 'District Agriculture Officer', phone: '+91-3592234502', email: 'pema.sherpa@agri.sikkim.gov.in', address: 'District Agriculture Office, Namchi, Sikkim, PIN: 737126' }
        ],
        'Mangan': [
            { name: 'Sonam Bhutia', designation: 'District Agriculture Officer', phone: '+91-3592234503', email: 'sonam.bhutia@agri.sikkim.gov.in', address: 'District Agriculture Office, Mangan, Sikkim, PIN: 737116' }
        ],
        'Gyalshing': [
            { name: 'Rinchen Tamang', designation: 'District Agriculture Officer', phone: '+91-3592234504', email: 'rinchen.tamang@agri.sikkim.gov.in', address: 'District Agriculture Office, Gyalshing, Sikkim, PIN: 737111' }
        ],
        'Pakyong': [
            { name: 'Dawa Lepcha', designation: 'District Agriculture Officer', phone: '+91-3592234505', email: 'dawa.lepcha@agri.sikkim.gov.in', address: 'District Agriculture Office, Pakyong, Sikkim, PIN: 737106' }
        ]
    },
    'Tamil Nadu': {
        'Chennai': [
            { name: 'Thiru. G. Govindharaj', designation: 'District Collector', phone: '+91-044-25228025', email: 'collrchn@nic.in', address: 'District Collectorate, Chennai, Tamil Nadu' },
            { name: 'Thirumathi. R. Latha', designation: 'Joint Director of Agriculture', phone: '+91-9840021782', email: 'fcosection@gmail.com', address: 'Office of the Joint Director, Chennai, Tamil Nadu' },
            { name: 'Thiru. Suresh Joe Kumar Bright', designation: 'Deputy Director of Agriculture (P&M)', phone: '+91-9884107735', email: 'coa.pos09@gmail.com', address: 'Deputy Director Office, Chennai, Tamil Nadu' },
            { name: 'Thiru. N. Annamalai', designation: 'Deputy Director of Agriculture (Atma)', phone: '+91-9443169657', email: 'coa.states@gmail.com', address: 'Deputy Director Office, Chennai, Tamil Nadu' },
            { name: 'Thiru. J. Ilanchizhian', designation: 'Deputy Director of Agriculture (Stat)', phone: '+91-9840968498', email: 'coap.pps2009@gmail.com', address: 'Deputy Director Office, Chennai, Tamil Nadu' },
            { name: 'Thiru. K. Rasu', designation: 'Deputy Director of Agriculture (PP)', phone: '+91-9842657810', email: 'diragri@tn.gov.in', address: 'Deputy Director Office, Chennai, Tamil Nadu' },
            { name: 'Thiru. P. Vanniyarajan', designation: 'Deputy Director of Agriculture (POS)', phone: '+91-9442059321', email: '', address: 'Deputy Director Office, Chennai, Tamil Nadu' },
            { name: 'Thiru. S. Sabanatesan', designation: 'Deputy Director of Agriculture (Ferti.)', phone: '+91-9443302378', email: 'coapaddy09@gmail.com', address: 'Deputy Director Office, Chennai, Tamil Nadu' },
            { name: 'S. Santhanagopalakrishnan', designation: 'Deputy Director of Agriculture (Misc.)', phone: '+91-9443475923', email: 'coa.atma@gmail.com', address: 'Deputy Director Office, Chennai, Tamil Nadu' },
            { name: 'Thiru. George Mamman', designation: 'Deputy Director of Agriculture (RFS)', phone: '+91-9444152680', email: 'coa.mande@gmail.com', address: 'Deputy Director Office, Chennai, Tamil Nadu' },
            { name: 'Tmt. Chitrakala', designation: 'Assistant Director of Agriculture (Seeds)', phone: '+91-7444173891', email: 'dirgri@tn.nic.in', address: 'Assistant Director Office, Chennai, Tamil Nadu' },
            { name: 'Thiru. P. S. Karunakaran', designation: 'Additional Director of Agriculture (Seeds) i/c', phone: '+91-9841855462', email: 'coa.iamwarm@gmail.com', address: 'Additional Director Office, Chennai, Tamil Nadu' },
            { name: 'Thiru. P. Venkatachalapathy', designation: 'Assistant Director of Agriculture (Computer)', phone: '+91-9444005219', email: '', address: 'Assistant Director Office, Chennai, Tamil Nadu' },
            { name: 'Thiru. K. P. Srikumar', designation: 'Additional Director of Agriculture (IAMWARM) i/c', phone: '+91-9944566338', email: 'diragri@tn.gov.in', address: 'Additional Director Office, Chennai, Tamil Nadu' },
            { name: 'Thiru. N. Ravisankar', designation: 'Assistant Director of Agriculture (States Scheme)', phone: '+91-9444829648', email: 'diragri@tn.gov.in', address: 'Assistant Director Office, Chennai, Tamil Nadu' }
        ],
        'Coimbatore': [
            { name: 'Thiru. M. Senthil Kumar', designation: 'District Agriculture Officer', phone: '+91-9445031234', email: 'senthil.kumar@agri.tn.gov.in', address: 'District Agriculture Office, Coimbatore, Tamil Nadu, PIN: 641001' }
        ],
        'Madurai': [
            { name: 'Thiru. R. Venkatesan', designation: 'District Agriculture Officer', phone: '+91-9445031235', email: 'venkatesan.r@agri.tn.gov.in', address: 'District Agriculture Office, Madurai, Tamil Nadu, PIN: 625001' }
        ],
        'Salem': [
            { name: 'Thiru. P. Ravi', designation: 'District Agriculture Officer', phone: '+91-9445031236', email: 'ravi.p@agri.tn.gov.in', address: 'District Agriculture Office, Salem, Tamil Nadu, PIN: 636001' }
        ],
        'Tiruchirappalli': [
            { name: 'Thiru. S. Balamurugan', designation: 'District Agriculture Officer', phone: '+91-9445031237', email: 'balamurugan.s@agri.tn.gov.in', address: 'District Agriculture Office, Tiruchirappalli, Tamil Nadu, PIN: 620001' }
        ],
        'Tirunelveli': [
            { name: 'Thiru. K. Arumugam', designation: 'District Agriculture Officer', phone: '+91-9445031238', email: 'arumugam.k@agri.tn.gov.in', address: 'District Agriculture Office, Tirunelveli, Tamil Nadu, PIN: 627001' }
        ]
    },
    'Telangana': {
        'Hyderabad': [
            { name: 'Srinivas Reddy', designation: 'District Agriculture Officer', phone: '+91-402234501', email: 'srinivas.reddy@agri.telangana.gov.in', address: 'District Agriculture Office, Hyderabad, Telangana, PIN: 500001' }
        ],
        'Warangal': [
            { name: 'Latha Kumari', designation: 'District Agriculture Officer', phone: '+91-402234502', email: 'latha.kumari@agri.telangana.gov.in', address: 'District Agriculture Office, Warangal, Telangana, PIN: 506001' }
        ],
        'Nizamabad': [
            { name: 'Ramesh Goud', designation: 'District Agriculture Officer', phone: '+91-402234503', email: 'ramesh.goud@agri.telangana.gov.in', address: 'District Agriculture Office, Nizamabad, Telangana, PIN: 503001' }
        ],
        'Karimnagar': [
            { name: 'Anita Rao', designation: 'District Agriculture Officer', phone: '+91-402234504', email: 'anita.rao@agri.telangana.gov.in', address: 'District Agriculture Office, Karimnagar, Telangana, PIN: 505001' }
        ],
        'Medak': [
            { name: 'Vijay Kumar', designation: 'District Agriculture Officer', phone: '+91-402234505', email: 'vijay.kumar@agri.telangana.gov.in', address: 'District Agriculture Office, Medak, Telangana, PIN: 502110' }
        ]
    },
    'Tripura': {
        'West Tripura': [
            { name: 'Subhash Deb', designation: 'District Agriculture Officer', phone: '+91-3812234501', email: 'subhash.deb@agri.tripura.gov.in', address: 'District Agriculture Office, West Tripura, Tripura, PIN: 799001' }
        ],
        'Dhalai': [
            { name: 'Anita Roy', designation: 'District Agriculture Officer', phone: '+91-3812234502', email: 'anita.roy@agri.tripura.gov.in', address: 'District Agriculture Office, Dhalai, Tripura, PIN: 799278' }
        ],
        'Gomati': [
            { name: 'Ramesh Tripura', designation: 'District Agriculture Officer', phone: '+91-3812234503', email: 'ramesh.tripura@agri.tripura.gov.in', address: 'District Agriculture Office, Gomati, Tripura, PIN: 799120' }
        ],
        'North Tripura': [
            { name: 'Suman Debnath', designation: 'District Agriculture Officer', phone: '+91-3812234504', email: 'suman.debnath@agri.tripura.gov.in', address: 'District Agriculture Office, North Tripura, Tripura, PIN: 799250' }
        ],
        'South Tripura': [
            { name: 'Jyoti Das', designation: 'District Agriculture Officer', phone: '+91-3812234505', email: 'jyoti.das@agri.tripura.gov.in', address: 'District Agriculture Office, South Tripura, Tripura, PIN: 799155' }
        ]
    },
    'Uttar Pradesh': {
        'Agra': [
            { name: 'Rahul Singh', designation: 'District Agriculture Officer', phone: '+91-9454412777', email: 'rahul.singh@agri.up.gov.in', address: 'District Agriculture Office, Agra, Uttar Pradesh, PIN: 282001' }
        ],
        'Varanasi': [
            { name: 'Suresh Yadav', designation: 'District Agriculture Officer', phone: '+91-9454412780', email: 'suresh.yadav@agri.up.gov.in', address: 'District Agriculture Office, Varanasi, Uttar Pradesh, PIN: 221001' }
        ],
        'Lucknow': [
            { name: 'Anita Sharma', designation: 'District Agriculture Officer', phone: '+91-9454412781', email: 'anita.sharma@agri.up.gov.in', address: 'District Agriculture Office, Lucknow, Uttar Pradesh, PIN: 226001' }
        ],
        'Kanpur Nagar': [
            { name: 'Vikram Singh', designation: 'District Agriculture Officer', phone: '+91-9454412782', email: 'vikram.singh@agri.up.gov.in', address: 'District Agriculture Office, Kanpur Nagar, Uttar Pradesh, PIN: 208001' }
        ],
        'Meerut': [
            { name: 'Ritu Verma', designation: 'District Agriculture Officer', phone: '+91-9454412783', email: 'ritu.verma@agri.up.gov.in', address: 'District Agriculture Office, Meerut, Uttar Pradesh, PIN: 250001' }
        ]
    },
    'Uttarakhand': {
        'Dehradun': [
            { name: 'Sanjay Negi', designation: 'District Agriculture Officer', phone: '+91-1352234501', email: 'sanjay.negi@agri.uk.gov.in', address: 'District Agriculture Office, Dehradun, Uttarakhand, PIN: 248001' }
        ],
        'Haridwar': [
            { name: 'Reena Joshi', designation: 'District Agriculture Officer', phone: '+91-1352234502', email: 'reena.joshi@agri.uk.gov.in', address: 'District Agriculture Office, Haridwar, Uttarakhand, PIN: 249401' }
        ],
        'Nainital': [
            { name: 'Vikram Rawat', designation: 'District Agriculture Officer', phone: '+91-1352234503', email: 'vikram.rawat@agri.uk.gov.in', address: 'District Agriculture Office, Nainital, Uttarakhand, PIN: 263001' }
        ],
        'Pauri Garhwal': [
            { name: 'Anita Bisht', designation: 'District Agriculture Officer', phone: '+91-1352234504', email: 'anita.bisht@agri.uk.gov.in', address: 'District Agriculture Office, Pauri Garhwal, Uttarakhand, PIN: 246001' }
        ],
        'Udham Singh Nagar': [
            { name: 'Rahul Thakur', designation: 'District Agriculture Officer', phone: '+91-1352234505', email: 'rahul.thakur@agri.uk.gov.in', address: 'District Agriculture Office, Udham Singh Nagar, Uttarakhand, PIN: 263153' }
        ]
    },
    'West Bengal': {
        'Kolkata': [
            { name: 'Suman Banerjee', designation: 'District Agriculture Officer', phone: '+91-332234501', email: 'suman.banerjee@agri.wb.gov.in', address: 'District Agriculture Office, Kolkata, West Bengal, PIN: 700001' }
        ],
        'Howrah': [
            { name: 'Rita Mondal', designation: 'District Agriculture Officer', phone: '+91-332234502', email: 'rita.mondal@agri.wb.gov.in', address: 'District Agriculture Office, Howrah, West Bengal, PIN: 711101' }
        ],
        'Hooghly': [
            { name: 'Arjun Das', designation: 'District Agriculture Officer', phone: '+91-332234503', email: 'arjun.das@agri.wb.gov.in', address: 'District Agriculture Office, Hooghly, West Bengal, PIN: 712101' }
        ],
        'Murshidabad': [
            { name: 'Anita Roy', designation: 'District Agriculture Officer', phone: '+91-332234504', email: 'anita.roy@agri.wb.gov.in', address: 'District Agriculture Office, Murshidabad, West Bengal, PIN: 742101' }
        ],
        'Nadia': [
            { name: 'Vikram Saha', designation: 'District Agriculture Officer', phone: '+91-332234505', email: 'vikram.saha@agri.wb.gov.in', address: 'District Agriculture Office, Nadia, West Bengal, PIN: 741101' }
        ]
    },
    'Andaman and Nicobar Islands': {
        'South Andaman': [
            { name: 'Ravi Kumar', designation: 'District Agriculture Officer', phone: '+91-3192234501', email: 'ravi.kumar@agri.ani.gov.in', address: 'District Agriculture Office, South Andaman, Andaman and Nicobar Islands, PIN: 744101' }
        ],
        'North and Middle Andaman': [
            { name: 'Suman Nair', designation: 'District Agriculture Officer', phone: '+91-3192234502', email: 'suman.nair@agri.ani.gov.in', address: 'District Agriculture Office, North and Middle Andaman, Andaman and Nicobar Islands, PIN: 744205' }
        ],
        'Nicobar': [
            { name: 'Anita Sharma', designation: 'District Agriculture Officer', phone: '+91-3192234503', email: 'anita.sharma@agri.ani.gov.in', address: 'District Agriculture Office, Nicobar, Andaman and Nicobar Islands, PIN: 744301' }
        ]
    },
}

function openContactsModal() {
    const modal = document.getElementById('contactsModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('modal-open');
    populateStates('stateSelect');
    document.getElementById('contactsContainer').innerHTML = '<div class="text-center py-8"><div class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-green-500">🌱</div><p class="text-gray-600 mt-4 text-lg">Select a state to view agriculture offices across India</p></div>';
    window.scrollTo(0, 0);
}

function closeContactsModal() {
    const modal = document.getElementById('contactsModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('modal-open');
    resetContactsModal();
}

function resetContactsModal() {
    const stateSelect = document.getElementById('stateSelect');
    const districtSelect = document.getElementById('districtSelect');
    const districtSelector = document.getElementById('districtSelector');
    const contactsContainer = document.getElementById('contactsContainer');
    if (stateSelect) stateSelect.value = '';
    if (districtSelector) districtSelector.classList.add('hidden');
    if (districtSelect) districtSelect.innerHTML = '<option value="">Select District</option>';
    if (contactsContainer) contactsContainer.innerHTML = '';
}

function populateStates(selectId) {
    const stateSelect = document.getElementById(selectId);
    if (!stateSelect) return;
    
    stateSelect.innerHTML = '<option value="">Loading states...</option>';
    setTimeout(() => {
        stateSelect.innerHTML = '<option value="">Select a State</option>';
        Object.keys(statesAndDistricts).sort().forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });
    }, 300);
}

function updateDistricts() {
    const stateSelect = document.getElementById('stateSelect');
    const districtSelect = document.getElementById('districtSelect');
    const districtSelector = document.getElementById('districtSelector');
    const contactsContainer = document.getElementById('contactsContainer');
    const selectedState = stateSelect.value;

    if (selectedState) {
        districtSelector.classList.remove('hidden');
        districtSelect.innerHTML = '<option value="">Loading districts...</option>';
        setTimeout(() => {
            districtSelect.innerHTML = '<option value="">Select District</option>';
            const districts = statesAndDistricts[selectedState] || [];
            districts.sort().forEach(district => {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
            contactsContainer.innerHTML = `<div class="text-center py-8"><div class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-green-500">📍</div><p class="text-gray-600 mt-4 text-lg">${selectedState} has ${districts.length} districts. Select a district to view contacts.</p></div>`;
        }, 300);
    } else {
        districtSelector.classList.add('hidden');
        districtSelect.innerHTML = '<option value="">Select District</option>';
        contactsContainer.innerHTML = '<div class="text-center py-8"><div class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-green-500">🌱</div><p class="text-gray-600 mt-4 text-lg">Select a state to view agriculture offices</p></div>';
    }
}

function generateContactsTable(district, contactsData) {
    if (!contactsData || contactsData.length === 0) {
        return `
            <div class="district-section mb-8">
                <h3 class="text-xl font-bold text-green-900 mb-4 border-b-2 border-green-500 pb-2">${district} Agriculture Office</h3>
                <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                    <div class="text-yellow-600 mb-2">📞</div>
                    <p class="text-yellow-800 font-medium">Contact information not available</p>
                    <p class="text-yellow-700 text-sm mt-1">Please contact the ${district} District Agriculture Department directly or visit their official website.</p>
                </div>
            </div>
        `;
    }

    let tableHTML = `
        <div class="district-section mb-8">
            <h3 class="text-xl font-bold text-green-900 mb-4 border-b-2 border-green-500 pb-2 flex items-center">
                <span class="mr-2">🏛️</span>${district} Agriculture Office
            </h3>
            <div class="overflow-x-auto rounded-lg border border-gray-200">
                <table class="min-w-full bg-white">
                    <thead class="bg-gradient-to-r from-green-600 to-green-700">
                        <tr>
                            <th class="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider sm:table-cell">Name</th>
                            <th class="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider sm:table-cell">Designation</th>
                            <th class="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider sm:table-cell">Contact</th>
                            <th class="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider hidden md:table-cell">Email</th>
                            <th class="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider hidden lg:table-cell">Address</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
    `;
    
    contactsData.forEach((contact, index) => {
        const rowClass = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';
        tableHTML += `
                        <tr class="${rowClass} hover:bg-green-50 transition-colors flex flex-col sm:table-row">
                            <td class="px-4 py-3 text-sm font-medium text-gray-900 sm:table-cell">
                                <div class="sm:hidden font-bold">Name:</div>
                                ${contact.name}
                            </td>
                            <td class="px-4 py-3 text-sm text-gray-700 sm:table-cell">
                                <div class="sm:hidden font-bold">Designation:</div>
                                ${contact.designation}
                            </td>
                            <td class="px-4 py-3 sm:table-cell">
                                <div class="sm:hidden font-bold">Contact:</div>
                                <a href="tel:${contact.phone.replace(/[^+\d]/g, '')}" class="text-green-600 hover:text-green-900 font-medium">${contact.phone}</a>
                            </td>
                            <td class="px-4 py-3 text-sm text-blue-600 hidden md:table-cell">
                                <div class="sm:hidden font-bold">Email:</div>
                                <a href="mailto:${contact.email}" class="hover:underline">${contact.email}</a>
                            </td>
                            <td class="px-4 py-3 text-sm text-gray-700 hidden lg:table-cell">
                                <div class="sm:hidden font-bold">Address:</div>
                                ${contact.address}
                            </td>
                        </tr>
        `;
    });
    
    tableHTML += `
                    </tbody>
                </table>
            </div>
        </div>
    `;
    return tableHTML;
}

function updateDistrictContacts() {
    const stateSelect = document.getElementById('stateSelect');
    const districtSelect = document.getElementById('districtSelect');
    const contactsContainer = document.getElementById('contactsContainer');
    const selectedState = stateSelect.value;
    const selectedDistrict = districtSelect.value;

    if (selectedState && selectedDistrict) {
        contactsContainer.innerHTML = '<div class="text-center py-8"><div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500 mx-auto"></div><p class="text-gray-600 mt-2">Loading contacts for ' + selectedDistrict + '...</p></div>';
        setTimeout(() => {
            const districtContacts = contacts[selectedState]?.[selectedDistrict] || [];
            contactsContainer.innerHTML = generateContactsTable(selectedDistrict, districtContacts);
        }, 800);
    } else if (selectedState) {
        contactsContainer.innerHTML = '<div class="text-center py-8"><div class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-green-500">📍</div><p class="text-gray-600 mt-4 text-lg">Select a district to view contact information</p></div>';
    } else {
        contactsContainer.innerHTML = '<div class="text-center py-8"><div class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-green-500">🌱</div><p class="text-gray-600 mt-4 text-lg">Select a state first</p></div>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const officesTrigger = document.getElementById('offices-trigger');
    if (officesTrigger) {
        officesTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            openContactsModal();
        });
    }

    const stateSelect = document.getElementById('stateSelect');
    if (stateSelect) {
        stateSelect.addEventListener('change', updateDistricts);
    }

    const districtSelect = document.getElementById('districtSelect');
    if (districtSelect) {
        districtSelect.addEventListener('change', updateDistrictContacts);
    }

    const closeModalButtons = document.querySelectorAll('.close-modal');
    closeModalButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.closest('#contactsModal')) {
                closeContactsModal();
            }
        });
    });

    const contactsModal = document.getElementById('contactsModal');
    if (contactsModal) {
        contactsModal.addEventListener('click', (e) => {
            if (e.target === contactsModal) {
                closeContactsModal();
            }
        });
    }
});