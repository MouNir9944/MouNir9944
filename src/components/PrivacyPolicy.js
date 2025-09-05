import React from "react";
import "./Policy.css";

export default function PrivacyPolicy() {
  return (
    <div className="policy-container">
      <div className="policy-header">
        <h1>Privacy Policy</h1>
        <p className="policy-intro">
          This Privacy Policy describes how Mounir Mahroug ("we," "our," or "us") collects, uses, and protects your personal information when you visit our website or use our services.
        </p>
        <p className="last-updated">Last updated: January 2024</p>
      </div>

      <div className="policy-content">
        <section className="policy-section">
          <h2>1. Information We Collect</h2>
          <div className="policy-subsection">
            <h3>1.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us, including:</p>
            <ul>
              <li>Name and contact information (email address, phone number)</li>
              <li>Professional information (job title, company, LinkedIn profile)</li>
              <li>Any information you provide through contact forms or correspondence</li>
              <li>Communication preferences and interests</li>
            </ul>
          </div>
          
          <div className="policy-subsection">
            <h3>1.2 Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect certain information:</p>
            <ul>
              <li>IP address and general location information</li>
              <li>Browser type, version, and language settings</li>
              <li>Device information (operating system, screen resolution, device type)</li>
              <li>Pages visited, time spent on pages, and navigation patterns</li>
              <li>Referring website or search terms used to find our site</li>
              <li>Date and time of your visit</li>
            </ul>
          </div>
        </section>

        <section className="policy-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including:</p>
          <ul>
            <li><strong>Service Provision:</strong> To provide our embedded systems and IoT development services</li>
            <li><strong>Communication:</strong> To respond to your inquiries and provide customer support</li>
            <li><strong>Website Improvement:</strong> To analyze website usage and improve user experience</li>
            <li><strong>Marketing:</strong> To send you relevant information about our services (with your consent)</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            <li><strong>Security:</strong> To protect against fraud and unauthorized access</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> With trusted third-party service providers who help us operate our website and provide services</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of business assets</li>
            <li><strong>Consent:</strong> When you have given explicit consent for specific sharing</li>
            <li><strong>Protection:</strong> To protect the rights, property, or safety of our users or others</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information:</p>
          <ul>
            <li>SSL encryption for data transmission</li>
            <li>Secure data storage with encryption at rest</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication measures</li>
            <li>Employee training on data protection practices</li>
            <li>Incident response procedures for data breaches</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>5. Data Retention</h2>
          <p>We retain your personal information only as long as necessary for the purposes outlined in this policy:</p>
          <ul>
            <li>Contact information: Until you request deletion or 3 years of inactivity</li>
            <li>Website analytics data: Up to 2 years</li>
            <li>Communication records: Up to 5 years for business purposes</li>
            <li>Legal requirements: As required by applicable laws</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>6. Your Rights and Choices</h2>
          <p>You have certain rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request access to your personal information we hold</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
            <li><strong>Objection:</strong> Object to processing of your personal information</li>
            <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
            <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>7. Cookies and Tracking</h2>
          <p>Our website uses cookies and similar technologies to enhance your experience:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
            <li><strong>Analytics Cookies:</strong> Help us understand website usage and performance</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
          </ul>
          <p>You can control cookie settings through your browser preferences or our cookie consent banner.</p>
        </section>

        <section className="policy-section">
          <h2>8. Third-Party Services</h2>
          <p>Our website may integrate with third-party services that have their own privacy policies:</p>
          <ul>
            <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
            <li><strong>Email Services:</strong> For communication and newsletter delivery</li>
            <li><strong>Social Media Platforms:</strong> For social media integration and sharing</li>
            <li><strong>Cloud Services:</strong> For data storage and processing</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>9. International Data Transfers</h2>
          <p>Your personal information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place:</p>
          <ul>
            <li>Standard contractual clauses approved by relevant authorities</li>
            <li>Adequacy decisions by data protection authorities</li>
            <li>Other appropriate safeguards as required by applicable law</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>10. Children's Privacy</h2>
          <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.</p>
        </section>

        <section className="policy-section">
          <h2>11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. When we make changes, we will:</p>
          <ul>
            <li>Post the updated policy on our website</li>
            <li>Update the "Last updated" date at the top of this policy</li>
            <li>Notify you of material changes via email (if applicable)</li>
            <li>Provide notice through our website or other appropriate means</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>12. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:mounir.mmahroug@gmail.com">mounir.mmahroug@gmail.com</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mounirmahroug" target="_blank" rel="noopener noreferrer">linkedin.com/in/mounirmahroug</a></p>
            <p><strong>Response Time:</strong> We will respond to your inquiry within 30 days</p>
          </div>
        </section>
      </div>
    </div>
  );
}
