import { Button } from "@/components/ui/button";
import { Trophy, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Trophy className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">IMAGINITIATE</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container text-center">
          <AlertTriangle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Disclaimer & Compliance</h1>
          <p className="text-lg opacity-90">Last Updated: December 29, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-muted-foreground mb-6">
                This Disclaimer and Compliance statement applies to the IMAGINITIATE fantasy sports platform operated by IMAGINITIATE VENTURES PRIVATE LIMITED. Please read this document carefully to understand the nature of our Service, our legal compliance, and important disclaimers regarding your use of the platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">1. Nature of Service</h2>
              
              <h3 className="text-xl font-semibold mb-3">1.1 Skill-Based Platform</h3>
              <p className="text-muted-foreground mb-4">
                IMAGINITIATE is a skill-based fantasy sports platform designed for educational and entertainment purposes. Success on our platform depends entirely on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Cricket knowledge and understanding of player statistics</li>
                <li>Analytical abilities and research skills</li>
                <li>Strategic decision-making and team composition</li>
                <li>Continuous learning and adaptation</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                The platform does not involve games of chance, gambling, or betting. There is no element of luck determining outcomes—only skill, knowledge, and strategy.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">1.2 Free-to-Play Model</h3>
              <p className="text-muted-foreground mb-4">
                IMAGINITIATE is completely free to use:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>No registration fees or subscription charges</li>
                <li>No entry fees for contests</li>
                <li>No in-app purchases or hidden costs</li>
                <li>No monetary transactions of any kind</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Skill Points earned on the platform are purely for educational tracking and have no monetary value. They cannot be exchanged, redeemed, or converted into currency or prizes.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">1.3 Educational Purpose</h3>
              <p className="text-muted-foreground">
                The primary purpose of IMAGINITIATE is educational—to help users deepen their understanding of cricket, develop analytical skills, and learn strategic thinking through practical application. The platform serves as a learning tool for cricket enthusiasts to enhance their knowledge in an engaging, interactive format.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Legal Compliance</h2>
              
              <h3 className="text-xl font-semibold mb-3">2.1 Indian Legal Framework</h3>
              <p className="text-muted-foreground mb-4">
                IMAGINITIATE operates in full compliance with Indian laws and regulations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Public Gambling Act, 1867:</strong> Our platform is not gambling as it is based purely on skill, not chance</li>
                <li><strong>Information Technology Act, 2000:</strong> We comply with data protection and cybersecurity requirements</li>
                <li><strong>Consumer Protection Act, 2019:</strong> We maintain fair practices and transparent policies</li>
                <li><strong>Companies Act, 2013:</strong> IMAGINITIATE VENTURES PRIVATE LIMITED is duly registered and compliant</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Skill vs. Chance</h3>
              <p className="text-muted-foreground mb-4">
                Fantasy sports are recognized as games of skill in India when they meet specific criteria. IMAGINITIATE meets these criteria:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Predominance of Skill:</strong> Outcomes depend primarily on user knowledge and strategy</li>
                <li><strong>No Element of Chance:</strong> Success is not determined by random events or luck</li>
                <li><strong>Informed Decision-Making:</strong> Users make decisions based on available information and analysis</li>
                <li><strong>Learning Curve:</strong> Performance improves with experience and knowledge</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Age Restrictions</h3>
              <p className="text-muted-foreground">
                The platform is restricted to users aged 18 years and above. We implement age verification measures during registration and prohibit minors from accessing the Service. Parents and guardians are responsible for monitoring their children's internet usage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. General Disclaimers</h2>
              
              <h3 className="text-xl font-semibold mb-3">3.1 No Warranties</h3>
              <p className="text-muted-foreground mb-4">
                The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties that the Service will be uninterrupted, timely, secure, or error-free</li>
                <li>Warranties regarding the accuracy, reliability, or completeness of content</li>
                <li>Warranties that defects will be corrected</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Third-Party Data</h3>
              <p className="text-muted-foreground mb-4">
                We rely on third-party sources for cricket match data, player statistics, and scores:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>We do not guarantee the accuracy, completeness, or timeliness of third-party data</li>
                <li>Errors or delays in data may occur due to factors beyond our control</li>
                <li>We are not responsible for consequences arising from data inaccuracies</li>
                <li>Users should verify critical information from official sources</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">3.3 No Professional Advice</h3>
              <p className="text-muted-foreground">
                Information provided on the platform is for educational and entertainment purposes only. It does not constitute professional advice of any kind—financial, legal, medical, or otherwise. Users should not rely on platform content as a substitute for professional consultation.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">3.4 User Responsibility</h3>
              <p className="text-muted-foreground mb-4">
                Users are solely responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Their decisions regarding team selection and contest participation</li>
                <li>Ensuring their use of the Service complies with local laws</li>
                <li>Maintaining the security of their account credentials</li>
                <li>Their conduct and interactions on the platform</li>
                <li>Any consequences arising from their use of the Service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
              
              <h3 className="text-xl font-semibold mb-3">4.1 No Liability for Damages</h3>
              <p className="text-muted-foreground mb-4">
                To the maximum extent permitted by law, IMAGINITIATE VENTURES PRIVATE LIMITED, its directors, employees, partners, agents, suppliers, or affiliates shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
                <li>Damages resulting from unauthorized access to or alteration of your data</li>
                <li>Damages resulting from interruption or cessation of the Service</li>
                <li>Damages resulting from third-party conduct or content</li>
                <li>Damages resulting from errors, mistakes, or inaccuracies in content</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Service Availability</h3>
              <p className="text-muted-foreground">
                We do not guarantee continuous, uninterrupted, or secure access to the Service. The platform may experience downtime due to maintenance, technical issues, or circumstances beyond our control. We are not liable for any consequences arising from service unavailability.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.3 User-Generated Content</h3>
              <p className="text-muted-foreground">
                We are not responsible for user-generated content, including team names, profile information, or communications between users. Users are solely responsible for their own content and the consequences of posting or publishing it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold mb-3">5.1 Platform Ownership</h3>
              <p className="text-muted-foreground mb-4">
                All content, features, and functionality of the IMAGINITIATE platform are owned by IMAGINITIATE VENTURES PRIVATE LIMITED and are protected by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Copyright laws</li>
                <li>Trademark laws</li>
                <li>Patent laws</li>
                <li>Other intellectual property rights</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">5.2 Third-Party Trademarks</h3>
              <p className="text-muted-foreground">
                Cricket team names, player names, and related trademarks mentioned on the platform are the property of their respective owners. We do not claim ownership of these marks and use them solely for identification and informational purposes. This use constitutes fair use under applicable law.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">5.3 No Affiliation</h3>
              <p className="text-muted-foreground">
                IMAGINITIATE is not affiliated with, endorsed by, or officially connected with any cricket board, league, team, or player. We are an independent platform providing fantasy sports services based on publicly available cricket information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Compliance with Local Laws</h2>
              
              <h3 className="text-xl font-semibold mb-3">6.1 User Responsibility</h3>
              <p className="text-muted-foreground mb-4">
                While IMAGINITIATE operates in compliance with Indian laws, fantasy sports regulations vary by jurisdiction. Users are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Determining whether fantasy sports are legal in their location</li>
                <li>Complying with all applicable local, state, and national laws</li>
                <li>Understanding and adhering to age restrictions in their jurisdiction</li>
                <li>Ensuring their participation does not violate any regulations</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">6.2 Restricted Jurisdictions</h3>
              <p className="text-muted-foreground">
                Users from jurisdictions where fantasy sports are prohibited or restricted should not use the Service. We reserve the right to block access from specific regions if required by law or if we determine that local regulations prohibit such services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Modifications and Termination</h2>
              
              <h3 className="text-xl font-semibold mb-3">7.1 Service Modifications</h3>
              <p className="text-muted-foreground">
                We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of the Service.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">7.2 Termination Rights</h3>
              <p className="text-muted-foreground">
                We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms. Upon termination, your right to use the Service will immediately cease.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold mb-3">8.1 Governing Law</h3>
              <p className="text-muted-foreground">
                This Disclaimer and all matters arising from or related to your use of the Service shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">8.2 Jurisdiction</h3>
              <p className="text-muted-foreground">
                Any disputes arising from this Disclaimer or your use of the Service shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">8.3 Dispute Resolution Process</h3>
              <p className="text-muted-foreground mb-4">
                Before initiating legal proceedings, we encourage users to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Contact our support team to resolve issues amicably</li>
                <li>Provide detailed information about the dispute</li>
                <li>Allow reasonable time for investigation and resolution</li>
                <li>Consider mediation or alternative dispute resolution methods</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Severability</h2>
              <p className="text-muted-foreground">
                If any provision of this Disclaimer is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable. If modification is not possible, the provision shall be severed, and the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Changes to This Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to update or modify this Disclaimer at any time. Changes will be effective immediately upon posting on the platform. Your continued use of the Service after any changes constitutes acceptance of the updated Disclaimer.
              </p>
              <p className="text-muted-foreground">
                We encourage you to review this Disclaimer periodically to stay informed about our policies and practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Disclaimer or our compliance practices, please contact us:
              </p>
              <div className="text-muted-foreground ml-4">
                <p><strong>IMAGINITIATE VENTURES PRIVATE LIMITED</strong></p>
                <p>A-96 GROUND FLOOR, SHANKAR GARDEN VIKASPURI</p>
                <p>NEW DELHI, East Delhi, Delhi, 110018</p>
                <p>Email: <a href="mailto:legal@imanitiatesports.com" className="text-primary hover:underline">legal@imanitiatesports.com</a></p>
                <p>General Support: <a href="mailto:support@imanitiatesports.com" className="text-primary hover:underline">support@imanitiatesports.com</a></p>
                <p>Website: <a href="https://imanitiatesports.com" className="text-primary hover:underline">imanitiatesports.com</a></p>
              </div>
            </div>

            <div className="border-t pt-8 mt-8">
              <p className="text-muted-foreground text-center font-semibold">
                By using IMAGINITIATE, you acknowledge that you have read, understood, and agree to this Disclaimer and Compliance statement.
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
    </div>
  );
}
