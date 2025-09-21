# PRAGATI – Career Pathway for Everyone 🎓✨

PRAGATI is an **AI-powered career and education advisory platform** designed to support students in **government education ecosystems**, especially in Tier-2 and Tier-3 cities.  
It helps students discover their strengths, build a **personalized course-to-career roadmap**, and connect with **local government colleges** that offer relevant opportunities.  

---

## 🚀 Problem Statement
Many students in government schools lack structured career guidance.  
This results in:
- Limited awareness of opportunities in local colleges  
- Dropouts due to confusion and poor career decisions  
- Under-enrollment in government higher education institutions  

---

## 💡 Our Solution
PRAGATI directly addresses these gaps by providing:
1. **AI-Powered Aptitude & Personality Analysis**  
   - Journaling + quizzes to understand students’ interests, strengths, and lifestyle.  

2. **Personalized Career Roadmap**  
   - End-to-end guidance: School → Course → Career.  

3. **Local Government College Directory**  
   - Searchable database of nearby colleges, cut-offs, scholarships, and facilities.  

4. **Offline-First Design**  
   - Works in low/no internet areas using distilled AI models (e.g., DistilBERT).  

5. **Progress Tracking & Resources**  
   - Monitors student journey and provides curated resources, alumni insights, and quizzes.  

---

## 🔑 Unique Selling Proposition (USP)
- **Government Integrated & Trusted**: Can connect with DigiLocker, admission, and scholarship portals.  
- **Hyper-Localized Personalization**: Maps students’ profiles to real opportunities in **nearby government colleges**.  
- **Equitable Access**: Offline-first functionality for rural and low-connectivity regions.  

---

## 🛠️ Tech Stack
**Frontend**: React.js (Web), React Native (Mobile), TailwindCSS / Material-UI  
**Backend**: Node.js + Express OR FastAPI (Python)  
**Database**: PostgreSQL (primary), MongoDB (feeds), Redis (caching)  
**Machine Learning**: Hugging Face Transformers (BERT, DistilBERT), Scikit-learn, PyTorch  
**Authentication**: JWT, OAuth 2.0  
**Deployment**: AWS / Azure / Cloudflare  

---

## 📂 Project Structure
```

.
├── frontend/        # React.js + Tailwind/Material-UI web app
├── mobile/          # React Native mobile app
├── backend/         # Node.js / FastAPI server
├── ml-models/       # ML models (BERT/DistilBERT for aptitude & personality analysis)
├── database/        # Schemas for PostgreSQL, MongoDB, Redis
└── docs/            # Project deck, diagrams, and documentation

````

---

## 🎥 Demo
- **Prototype Link**: [Insert deployed prototype URL]  
- **Demo Video (3 min)**: [Insert video link]  

---

## 📊 Architecture
![Architecture Diagram](docs/architecture.png)  
*(Include diagram from your PPT here)*  

---

## 📜 How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/<username>/pragati-career-advisor.git
cd pragati-career-advisor
````

### 2. Install dependencies

```bash
# Backend
cd backend
npm install   # or pip install -r requirements.txt if using FastAPI

# Frontend
cd ../frontend
npm install
```

### 3. Start development servers

```bash
# Backend
npm run dev   # or uvicorn main:app --reload

# Frontend
npm run dev
```

### 4. Access the app

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 👨‍👩‍👧‍👦 Target Audience

* Students of classes **8–12** in government schools
* Primarily from **Tier-2 and Tier-3 cities**
* Students with **low internet access**

---

## 📈 Future Scope

* Integration with official government admission/scholarship systems
* AI-powered mentorship & alumni networks
* Multilingual support for regional accessibility
* Mobile-first PWA deployment

---

## 👥 Team Wakanda

* **Team Leader**: Vedang Dubey
* Akshat Agarwal
* Anushka Bharadwaj
* Nitya Pahwa

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

```
