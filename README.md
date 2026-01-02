# SecureDataShare (FinSafe)
### Privacy-First Fintech Data Sharing Framework

## Overview
SecureDataShare (FinSafe) is a privacy-by-design fintech framework that enables
secure, consent-driven sharing of sensitive financial data across platforms.

The system was designed and implemented as part of the **Canara Bank Suraksha Hackathon**,
where it achieved **Finalist** position.

## Live Demo
🔗 https://finsafee.netlify.app/

## Problem
Fintech applications frequently access:
- Bank account details
- KYC / identity data
- Transaction histories

Key challenges include:
- Data breaches and misuse
- Lack of user control after data sharing
- Compliance requirements (GDPR, DPDP Act)
- No transparent audit trails

## Solution
FinSafe addresses these issues using:
- User-centric consent management
- Tokenization of sensitive data
- Role-based and policy-driven access control
- Behavioral authentication and anomaly detection
- Blockchain-based auditability

## Architecture
The platform consists of:
- **Frontend:** React / React Native interface for consent and monitoring
- **API Gateway:** Central request routing and validation
- **Consent Service:** Fine-grained permission management
- **Tokenization Service:** Secure masking of sensitive fields
- **Anomaly Detection:** Behavioral risk analysis
- **Audit Layer:** Immutable logs for compliance

(See `ppt/` and `docs/` for diagrams.)

## Tech Stack
- **Backend:** Golang (concurrency-oriented services)
- **Frontend:** React / React Native
- **Database:** MongoDB / Supabase
- **Security:** Tokenization, Access Control
- **Deployment:** Netlify

## Outcome
- Achieved **low-latency** secure data exchange
- Reduced exposure of sensitive data in mobile environments
- Recognized as **Finalist – Canara Bank Suraksha Hackathon**

## Note
Real customer data is not included due to privacy and security constraints.
This repository focuses on architecture, security design, and implementation logic.
