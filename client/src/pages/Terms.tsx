import { Button } from "@/components/ui/button";
import { Trophy, FileText } from "lucide-react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";

export default function Terms() {
  return (
    <Layout>
      {/* Navigation */}
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container text-center">
          <FileText className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-lg opacity-90">Last Updated: December 29, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-muted-foreground mb-6">
                Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the IMAGINITIATE fantasy sports platform (the "Service") operated by IMAGINITIATE VENTURES PRIVATE LIMITED ("us", "we", or "our").
              </p>
              <p className="text-muted-foreground">
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
              <p className="text-muted-foreground font-semibold">
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">1. Definitions</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>"Platform"</strong> refers to the IMAGINITIATE website and all associated services</li>
                <li><strong>"User"</strong> refers to any individual who accesses or uses the Platform</li>
                <li><strong>"Account"</strong> refers to the unique user profile created on the Platform</li>
                <li><strong>"Contest"</strong> refers to fantasy cricket competitions hosted on the Platform</li>
                <li><strong>"Team"</strong> refers to the virtual cricket team created by a User</li>
                <li><strong>"Skill Points"</strong> refers to the non-monetary points earned through gameplay</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
              <h3 className="text-xl font-semibold mb-3">2.1 Age Requirement</h3>
              <p className="text-muted-foreground mb-4">
                You must be at least 18 years of age to use the Service. By using the Service, you represent and warrant that you are at least 18 years old.
              </p>
              <h3 className="text-xl font-semibold mb-3">2.2 Geographic Restrictions</h3>
              <p className="text-muted-foreground mb-4">
                The Service is available globally, subject to local laws and regulations. You are responsible for ensuring that your use of the Service complies with all applicable laws in your jurisdiction.
              </p>
              <h3 className="text-xl font-semibold mb-3">2.3 Account Limitations</h3>
              <p className="text-muted-foreground">
                Each User may create and maintain only one Account. Creating multiple accounts is strictly prohibited and may result in termination of all associated accounts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Account Registration and Security</h2>
              <h3 className="text-xl font-semibold mb-3">3.1 Account Creation</h3>
              <p className="text-muted-foreground mb-4">
                To access certain features of the Service, you must register for an Account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
              <h3 className="text-xl font-semibold mb-3">3.2 Account Security</h3>
              <p className="text-muted-foreground mb-4">
                You are responsible for safeguarding your Account credentials and for any activities or actions under your Account. You must immediately notify us of any unauthorized use of your Account or any other breach of security.
              </p>
              <h3 className="text-xl font-semibold mb-3">3.3 Account Termination</h3>
              <p className="text-muted-foreground">
                We reserve the right to suspend or terminate your Account at any time, with or without notice, for conduct that we believe violates these Terms or is harmful to other Users, us, or third parties, or for any other reason.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Nature of the Service</h2>
              <h3 className="text-xl font-semibold mb-3">4.1 Skill-Based Gaming</h3>
              <p className="text-muted-foreground mb-4">
                IMAGINITIATE is a skill-based fantasy sports platform. Success on the Platform depends on your cricket knowledge, analytical abilities, and strategic decision-making. The Service does not involve games of chance or gambling.
              </p>
              <h3 className="text-xl font-semibold mb-3">4.2 Educational Purpose</h3>
              <p className="text-muted-foreground mb-4">
                The Platform is designed for educational and entertainment purposes. It aims to enhance cricket knowledge, develop analytical skills, and provide an engaging way to experience cricket strategy.
              </p>
              <h3 className="text-xl font-semibold mb-3">4.3 Free-to-Play</h3>
              <p className="text-muted-foreground">
                The Service is completely free to use. There are no fees, subscriptions, or monetary transactions required to access any features of the Platform. Skill Points earned on the Platform have no monetary value and cannot be exchanged for currency or prizes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. User Conduct</h2>
              <h3 className="text-xl font-semibold mb-3">5.1 Prohibited Activities</h3>
              <p className="text-muted-foreground mb-4">You agree not to engage in any of the following prohibited activities:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Creating multiple accounts or using another User's account</li>
                <li>Using automated tools, bots, or scripts to interact with the Service</li>
                <li>Attempting to manipulate contests, rankings, or scoring systems</li>
                <li>Exploiting bugs, glitches, or vulnerabilities in the Platform</li>
                <li>Harassing, threatening, or abusing other Users</li>
                <li>Sharing false or misleading information</li>
                <li>Attempting to gain unauthorized access to the Platform or other Users' accounts</li>
                <li>Interfering with or disrupting the Service or servers</li>
                <li>Using the Service for any illegal purpose</li>
              </ul>
              <h3 className="text-xl font-semibold mb-3 mt-6">5.2 Fair Play</h3>
              <p className="text-muted-foreground">
                You agree to participate in contests honestly and in accordance with our Fair Play Policy. Collusion, coordination with other Users to gain unfair advantages, or any form of cheating is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
              <h3 className="text-xl font-semibold mb-3">6.1 Platform Content</h3>
              <p className="text-muted-foreground mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive property of IMAGINITIATE VENTURES PRIVATE LIMITED and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.
              </p>
              <h3 className="text-xl font-semibold mb-3">6.2 User-Generated Content</h3>
              <p className="text-muted-foreground mb-4">
                By creating teams, participating in contests, or submitting any content to the Platform, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display such content in connection with the Service.
              </p>
              <h3 className="text-xl font-semibold mb-3">6.3 Trademarks</h3>
              <p className="text-muted-foreground">
                "IMAGINITIATE" and related logos are trademarks of IMAGINITIATE VENTURES PRIVATE LIMITED. You may not use these trademarks without our prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Data and Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your personal information.
              </p>
              <p className="text-muted-foreground">
                By using the Service, you consent to the collection and use of your information as described in the Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Contest Rules and Scoring</h2>
              <h3 className="text-xl font-semibold mb-3">8.1 Contest Participation</h3>
              <p className="text-muted-foreground mb-4">
                By entering a contest, you agree to abide by the contest rules and scoring system as published on the Platform. We reserve the right to modify contest rules and scoring systems at any time, with notice provided to Users.
              </p>
              <h3 className="text-xl font-semibold mb-3">8.2 Team Selection</h3>
              <p className="text-muted-foreground mb-4">
                Teams must be created in accordance with the specified rules (player limits, credit constraints, etc.). Teams that violate these rules may be disqualified from contests.
              </p>
              <h3 className="text-xl font-semibold mb-3">8.3 Scoring Accuracy</h3>
              <p className="text-muted-foreground">
                While we strive for accuracy in scoring, we rely on third-party data sources for match statistics. We are not responsible for errors or delays in data provided by these sources. In case of scoring disputes, our decision shall be final.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Disclaimers and Limitations of Liability</h2>
              <h3 className="text-xl font-semibold mb-3">9.1 Service "As Is"</h3>
              <p className="text-muted-foreground mb-4">
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the Service, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
              <h3 className="text-xl font-semibold mb-3">9.2 No Guarantee of Availability</h3>
              <p className="text-muted-foreground mb-4">
                We do not guarantee that the Service will be uninterrupted, timely, secure, or error-free. We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
              </p>
              <h3 className="text-xl font-semibold mb-3">9.3 Limitation of Liability</h3>
              <p className="text-muted-foreground">
                In no event shall IMAGINITIATE VENTURES PRIVATE LIMITED, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to defend, indemnify, and hold harmless IMAGINITIATE VENTURES PRIVATE LIMITED and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li>Your use and access of the Service</li>
                <li>Your violation of any term of these Terms</li>
                <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                <li>Any claim that your content caused damage to a third party</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Modifications to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p className="text-muted-foreground">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">13. Severability</h2>
              <p className="text-muted-foreground">
                If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have between us regarding the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="text-muted-foreground ml-4">
                <p><strong>IMAGINITIATE VENTURES PRIVATE LIMITED</strong></p>
                <p>A-96 GROUND FLOOR, SHANKAR GARDEN VIKASPURI</p>
                <p>NEW DELHI, East Delhi, Delhi, 110018</p>
                <p>Email: <a href="mailto:support@imanitiatesports.com" className="text-primary hover:underline">support@imanitiatesports.com</a></p>
                <p>Website: <a href="https://imanitiatesports.com" className="text-primary hover:underline">imanitiatesports.com</a></p>
              </div>
            </div>

            <div className="border-t pt-8 mt-8">
              <p className="text-muted-foreground text-center">
                By using IMAGINITIATE, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/50 mt-auto">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 IMAGINITIATE VENTURES PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </footer>
    </Layout>
  );
}
