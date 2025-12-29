import { Button } from "@/components/ui/button";
import { Trophy, Shield } from "lucide-react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
      {/* Navigation */}
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container text-center">
          <Shield className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg opacity-90">Last Updated: December 29, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-muted-foreground mb-6">
                IMAGINITIATE VENTURES PRIVATE LIMITED ("we", "us", or "our") operates the IMAGINITIATE fantasy sports platform (the "Service"). This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
              <p className="text-muted-foreground font-semibold">
                By using the Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with this policy, please do not use our Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">1.1 Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                When you register for an account, we collect personal information that you voluntarily provide, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Account Information:</strong> Name, email address, username, and password</li>
                <li><strong>Profile Information:</strong> Optional profile details you choose to provide</li>
                <li><strong>Contact Information:</strong> Email address for communication purposes</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">1.2 Usage Data</h3>
              <p className="text-muted-foreground mb-4">
                We automatically collect certain information when you use the Service:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Device Information:</strong> IP address, browser type, device type, operating system</li>
                <li><strong>Usage Information:</strong> Pages visited, time spent on pages, features used, contests entered</li>
                <li><strong>Performance Data:</strong> Teams created, skill points earned, contest rankings</li>
                <li><strong>Interaction Data:</strong> Clicks, navigation patterns, and other interactions with the Service</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">1.3 Cookies and Tracking Technologies</h3>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to track activity on our Service and hold certain information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Session Cookies:</strong> To keep you logged in during your session</li>
                <li><strong>Preference Cookies:</strong> To remember your settings and preferences</li>
                <li><strong>Analytics Cookies:</strong> To understand how you use the Service</li>
                <li><strong>Security Cookies:</strong> To detect and prevent security threats</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>To Provide and Maintain the Service:</strong> Enable account creation, team management, and contest participation</li>
                <li><strong>To Improve the Service:</strong> Analyze usage patterns to enhance features and user experience</li>
                <li><strong>To Communicate with You:</strong> Send updates, notifications, and respond to inquiries</li>
                <li><strong>To Ensure Security:</strong> Detect and prevent fraud, abuse, and unauthorized access</li>
                <li><strong>To Enforce Policies:</strong> Monitor compliance with our Terms and Conditions and Fair Play Policy</li>
                <li><strong>To Personalize Experience:</strong> Customize content and features based on your preferences</li>
                <li><strong>To Conduct Analytics:</strong> Understand user behavior and platform performance</li>
                <li><strong>To Comply with Legal Obligations:</strong> Meet regulatory requirements and respond to legal requests</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Legal Basis for Processing (GDPR)</h2>
              <p className="text-muted-foreground mb-4">
                If you are from the European Economic Area (EEA), our legal basis for collecting and using your personal information depends on the data and the context:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Contract Performance:</strong> Processing necessary to provide the Service you requested</li>
                <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests (e.g., improving the Service, preventing fraud)</li>
                <li><strong>Consent:</strong> You have given explicit consent for specific processing activities</li>
                <li><strong>Legal Obligation:</strong> Processing required to comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
              
              <h3 className="text-xl font-semibold mb-3">4.1 We Do Not Sell Your Data</h3>
              <p className="text-muted-foreground mb-4">
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>

              <h3 className="text-xl font-semibold mb-3">4.2 Service Providers</h3>
              <p className="text-muted-foreground mb-4">
                We may share your information with third-party service providers who perform services on our behalf:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Hosting Providers:</strong> To store and manage data</li>
                <li><strong>Analytics Providers:</strong> To analyze usage and improve the Service</li>
                <li><strong>Email Service Providers:</strong> To send communications</li>
                <li><strong>Security Providers:</strong> To protect against threats and fraud</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                These service providers are contractually obligated to use your information only as necessary to provide services to us and are prohibited from using it for their own purposes.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Legal Requirements</h3>
              <p className="text-muted-foreground mb-4">
                We may disclose your information if required to do so by law or in response to valid requests by public authorities:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>To comply with a legal obligation</li>
                <li>To protect and defend our rights or property</li>
                <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>To protect the personal safety of users or the public</li>
                <li>To protect against legal liability</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.4 Business Transfers</h3>
              <p className="text-muted-foreground">
                In the event of a merger, acquisition, or sale of assets, your personal information may be transferred. We will provide notice before your personal information is transferred and becomes subject to a different Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We take the security of your data seriously and implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Encryption:</strong> Data is encrypted in transit and at rest</li>
                <li><strong>Access Controls:</strong> Strict access controls limit who can view your data</li>
                <li><strong>Regular Audits:</strong> Security practices are regularly reviewed and updated</li>
                <li><strong>Secure Infrastructure:</strong> We use secure, industry-standard hosting and infrastructure</li>
                <li><strong>Monitoring:</strong> Continuous monitoring for security threats and vulnerabilities</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Active Accounts:</strong> Data is retained while your account is active</li>
                <li><strong>Inactive Accounts:</strong> Data may be retained for a reasonable period after account inactivity</li>
                <li><strong>Legal Obligations:</strong> Data may be retained longer if required by law</li>
                <li><strong>Legitimate Interests:</strong> Data may be retained for fraud prevention, security, or dispute resolution</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                When we no longer need your personal information, we will securely delete or anonymize it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Your Data Protection Rights</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Right to Access:</strong> Request copies of your personal information</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal information</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation on how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Right to Object:</strong> Object to our processing of your personal information</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@imanitiatesports.com" className="text-primary hover:underline">privacy@imanitiatesports.com</a>. We will respond to your request within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.
              </p>
              <p className="text-muted-foreground">
                If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we will take steps to remove that information from our servers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. International Data Transfers</h2>
              <p className="text-muted-foreground mb-4">
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ.
              </p>
              <p className="text-muted-foreground">
                If you are located outside India and choose to provide information to us, please note that we transfer the data, including personal information, to India and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our Service may contain links to third-party websites or services that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p className="text-muted-foreground">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page. Your continued use of the Service after any modifications indicates your acceptance of the updated Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="text-muted-foreground ml-4">
                <p><strong>IMAGINITIATE VENTURES PRIVATE LIMITED</strong></p>
                <p>A-96 GROUND FLOOR, SHANKAR GARDEN VIKASPURI</p>
                <p>NEW DELHI, East Delhi, Delhi, 110018</p>
                <p>Email: <a href="mailto:privacy@imanitiatesports.com" className="text-primary hover:underline">privacy@imanitiatesports.com</a></p>
                <p>General Support: <a href="mailto:support@imanitiatesports.com" className="text-primary hover:underline">support@imanitiatesports.com</a></p>
                <p>Website: <a href="https://imanitiatesports.com" className="text-primary hover:underline">imanitiatesports.com</a></p>
              </div>
            </div>

            <div className="border-t pt-8 mt-8">
              <p className="text-muted-foreground text-center">
                By using IMAGINITIATE, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
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
