import React from 'react';
import { Container } from 'react-bootstrap';

const PrivacyPolicy: React.FC = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Privacy Policy</h1>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <section className="mb-4">
            <h3>1. Information We Collect</h3>
            <p>
              We collect information that you provide directly to us, including but not limited to:
            </p>
            <ul>
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Quiz responses and scores</li>
              <li>Feedback and communications</li>
            </ul>
          </section>

          <section className="mb-4">
            <h3>2. How We Use Your Information</h3>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Improve user experience</li>
              <li>Send important updates and notifications</li>
              <li>Analyze usage patterns and trends</li>
            </ul>
          </section>

          <section className="mb-4">
            <h3>3. Information Sharing</h3>
            <p>
              We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul>
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
            </ul>
          </section>

          <section className="mb-4">
            <h3>4. Data Security</h3>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-4">
            <h3>5. Your Rights</h3>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of communications</li>
            </ul>
          </section>

          <section className="mb-4">
            <h3>6. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our feedback form.
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy; 