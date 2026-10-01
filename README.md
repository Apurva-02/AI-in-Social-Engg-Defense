# AI in Social Engineering Defense

## Project Overview
AI in Social Engineering Defense is a web-based system that helps identify common online threats. It analyzes website URLs and SMS messages to classify them as **safe** or **potentially malicious/spam**.

The project aims to help users recognize suspicious links and messages before interacting with them.

## Main Features
- **Phishing URL Detection:** Checks a submitted URL and predicts whether it is safe or phishing.
- **SMS Spam Detection:** Analyzes a text message and predicts whether it is legitimate or spam.
- **Result Display:** Shows the classification result to the user.
- **Threat Logging:** Stores detection-related information in the database for review.

## Technologies Used
| Technology | Purpose |
|---|---|
| HTML, CSS, JavaScript | User interface |
| Node.js | Backend and request handling |
| Python | Machine learning model execution |
| Random Forest | Classification algorithm |
| Naive Bayes | Text classification algorithm |
| MongoDB Atlas | Storing application and detection data |

## How the System Works
1. The user opens the web application.
2. The user enters a URL or SMS message.
3. The frontend sends the input to the Node.js backend.
4. The backend passes the input to the relevant Python machine learning model.
5. The model analyzes the input and predicts its class.
6. The result is returned to the backend and displayed on the web page.
7. Relevant detection information can be stored in MongoDB.

## Machine Learning
The project uses two classification algorithms:
- **Random Forest:** Uses multiple decision trees and combines their results to make a classification.
- **Naive Bayes:** Uses probability-based classification and is suitable for text-related tasks.

The models are used to classify inputs based on the data and features provided during training. Their predictions are intended as assistance and should not be treated as a guarantee that a URL or message is safe.

## Dataset
The phishing URL model was developed using a dataset containing phishing and safe URLs. The SMS detection model uses labeled SMS messages to learn the difference between spam and legitimate messages.

## Project Workflow
```text
User Input
   |
   v
Web Interface (HTML, CSS, JavaScript)
   |
   v
Node.js Backend
   |
   v
Python ML Model
   |
   v
Prediction: Safe / Phishing or Spam / Not Spam
   |
   v
Display Result
   |
   v
MongoDB (store relevant records)
```

## Installation and Setup

### Prerequisites
- Node.js and npm
- Python
- MongoDB Atlas account or a configured MongoDB connection
- Git

### Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/Apurva-02/AI-in-Social-Engg-Defense.git
   ```
2. Open the project folder:
   ```bash
   cd AI-in-Social-Engg-Defense
   ```
3. Install the Node.js dependencies:
   ```bash
   npm install
   ```
4. Install the Python dependencies listed in the project's `requirements.txt`, if present:
   ```bash
   pip install -r requirements.txt
   ```
5. Configure the MongoDB connection and any required environment variables as expected by the project.
6. Start the application using the start command defined in `package.json`:
   ```bash
   npm start
   ```

> If your project uses a different start script or Python environment, use the commands configured in its files.

## Limitations
- Predictions depend on the quality and coverage of the training dataset.
- New or modified phishing techniques may not be recognized.
- A prediction can be incorrect; users should verify suspicious links and messages through other trusted means.
- The application requires a working connection between the frontend, Node.js backend, Python environment, and database.

## Future Improvements
- Expand and regularly update the training datasets.
- Improve validation and handling of unusual inputs.
- Add clearer explanations for why an input was flagged.
- Improve the interface and detection history.

## Repository
[GitHub Repository](https://github.com/Apurva-02/AI-in-Social-Engg-Defense)
