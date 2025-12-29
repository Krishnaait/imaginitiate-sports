import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Heart, AlertCircle, CheckCircle2, Shield, Clock, Users, Brain } from "lucide-react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";

export default function ResponsibleGaming() {
  return (
    <Layout>
      {/* Navigation */}
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <Heart className="h-20 w-20 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Responsible Gaming</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Enjoy fantasy cricket responsibly and maintain a healthy balance in your life
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              At IMAGINITIATE, we are committed to promoting responsible gaming practices. While fantasy cricket is designed to be educational, entertaining, and skill-based, we recognize the importance of maintaining healthy habits and balance in all activities.
            </p>
            <p>
              This page provides comprehensive guidelines, self-assessment tools, and resources to help you enjoy fantasy cricket responsibly while prioritizing your well-being, relationships, and other life responsibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Core Principles of Responsible Gaming</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">1. Gaming as Entertainment & Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Fantasy cricket on IMAGINITIATE is designed to be a fun, educational activity that enhances your cricket knowledge and strategic thinking. It should never become a source of stress, anxiety, or compulsion.
                </p>
                <p><strong>Remember:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The primary goal is to learn and enjoy cricket, not to achieve perfection</li>
                  <li>Winning and losing are both part of the learning experience</li>
                  <li>Your value as a person is not determined by your fantasy cricket performance</li>
                  <li>It's okay to take breaks and step away when needed</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">2. Time Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  While fantasy cricket can be engaging, it's important to set boundaries on the time you spend on the platform.
                </p>
                <p><strong>Healthy time management practices:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Set specific time limits for fantasy cricket activities (e.g., 30-60 minutes per day)</li>
                  <li>Use timers or reminders to track your usage</li>
                  <li>Avoid checking the platform constantly throughout the day</li>
                  <li>Schedule fantasy cricket time that doesn't interfere with work, studies, or sleep</li>
                  <li>Take regular breaks—don't play for extended periods without rest</li>
                  <li>Designate "no-screen" times for family, meals, and relaxation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">3. Balance with Life Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Fantasy cricket should complement your life, not dominate it. Maintaining balance across all areas of life is essential for well-being.
                </p>
                <p><strong>Priority areas to protect:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Work/Studies:</strong> Never let fantasy cricket interfere with professional or academic responsibilities</li>
                  <li><strong>Relationships:</strong> Spend quality time with family and friends without distraction</li>
                  <li><strong>Physical Health:</strong> Maintain exercise routines, proper sleep, and healthy eating habits</li>
                  <li><strong>Mental Health:</strong> Engage in stress-relief activities, hobbies, and self-care</li>
                  <li><strong>Social Life:</strong> Participate in offline social activities and community engagement</li>
                  <li><strong>Personal Growth:</strong> Continue learning, reading, and pursuing other interests</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">4. Emotional Well-Being</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Your emotional response to fantasy cricket outcomes is an important indicator of healthy engagement.
                </p>
                <p><strong>Healthy emotional practices:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Accept that you won't win every contest—losses are learning opportunities</li>
                  <li>Don't let fantasy cricket results significantly affect your mood or self-esteem</li>
                  <li>Avoid making decisions when frustrated or upset about outcomes</li>
                  <li>Celebrate successes moderately without becoming overconfident</li>
                  <li>If you feel anxious or stressed about fantasy cricket, take a break</li>
                  <li>Remember that it's just a game—real life matters more</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Warning Signs of Unhealthy Gaming</h2>
            <p className="text-xl text-muted-foreground">
              Recognize when fantasy cricket might be becoming problematic
            </p>
          </div>

          <Card className="border-destructive/50">
            <CardContent className="pt-6 space-y-6">
              <p className="text-muted-foreground">
                If you experience any of the following signs, it may indicate that your fantasy cricket engagement has become unhealthy. Consider taking a break and reassessing your relationship with the platform:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Time-Related Signs:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-muted-foreground">
                      <li>Spending more time than intended on the platform regularly</li>
                      <li>Losing track of time while engaged in fantasy cricket</li>
                      <li>Staying up late or waking up early specifically for fantasy cricket</li>
                      <li>Checking the platform compulsively throughout the day</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Responsibility-Related Signs:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-muted-foreground">
                      <li>Neglecting work, studies, or household responsibilities</li>
                      <li>Missing deadlines or appointments due to fantasy cricket</li>
                      <li>Declining performance at work or school</li>
                      <li>Ignoring important tasks to focus on team selection or contests</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Relationship-Related Signs:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-muted-foreground">
                      <li>Spending less quality time with family and friends</li>
                      <li>Conflicts with loved ones about time spent on fantasy cricket</li>
                      <li>Withdrawing from social activities to focus on the platform</li>
                      <li>Prioritizing fantasy cricket over important relationships</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Emotional/Mental Signs:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-muted-foreground">
                      <li>Feeling anxious, irritable, or restless when not playing</li>
                      <li>Mood swings based on fantasy cricket outcomes</li>
                      <li>Difficulty concentrating on other activities</li>
                      <li>Feeling guilty about time spent on fantasy cricket</li>
                      <li>Using fantasy cricket to escape problems or negative emotions</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Physical Health Signs:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-muted-foreground">
                      <li>Sleep deprivation or irregular sleep patterns</li>
                      <li>Skipping meals or eating irregularly</li>
                      <li>Reduced physical activity or exercise</li>
                      <li>Eye strain, headaches, or posture problems from excessive screen time</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Behavioral Signs:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4 text-muted-foreground">
                      <li>Lying to others about time spent on fantasy cricket</li>
                      <li>Feeling defensive when questioned about your usage</li>
                      <li>Unsuccessful attempts to cut back on fantasy cricket time</li>
                      <li>Continuing to play despite negative consequences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Self-Assessment */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Self-Assessment Questions</h2>
          <Card>
            <CardContent className="pt-6 space-y-6">
              <p className="text-muted-foreground">
                Answer these questions honestly to assess your fantasy cricket habits. If you answer "yes" to multiple questions, consider adjusting your engagement:
              </p>

              <div className="space-y-4">
                {[
                  "Do you often spend more time on fantasy cricket than you initially planned?",
                  "Have you neglected important responsibilities because of fantasy cricket?",
                  "Do you feel anxious or irritable when you can't access the platform?",
                  "Has fantasy cricket caused conflicts in your relationships?",
                  "Do you use fantasy cricket to escape from problems or negative feelings?",
                  "Have you tried to cut back on fantasy cricket but found it difficult?",
                  "Do your mood and self-esteem depend heavily on fantasy cricket outcomes?",
                  "Has your sleep, diet, or exercise routine suffered due to fantasy cricket?",
                  "Do you hide or lie about the amount of time you spend on fantasy cricket?",
                  "Do you continue playing even when it's causing negative consequences?",
                ].map((question, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded">
                    <span className="font-semibold text-primary">{index + 1}.</span>
                    <span className="text-muted-foreground">{question}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="font-semibold mb-2">Interpreting Your Results:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>0-2 "Yes" answers:</strong> Your habits appear healthy. Continue practicing responsible gaming.</li>
                  <li><strong>3-5 "Yes" answers:</strong> Consider setting stricter boundaries and monitoring your usage more closely.</li>
                  <li><strong>6+ "Yes" answers:</strong> Your fantasy cricket engagement may be problematic. Take a break and seek support if needed.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Healthy Gaming Tips */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Tips for Healthy Gaming</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Set Clear Boundaries</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Decide in advance how much time you'll spend</li>
                  <li>Set alarms or use app timers</li>
                  <li>Designate specific times for fantasy cricket</li>
                  <li>Stick to your limits even when tempted to continue</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Prioritize Real Life</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Complete important tasks before playing</li>
                  <li>Never skip meals, sleep, or exercise for fantasy cricket</li>
                  <li>Maintain face-to-face social connections</li>
                  <li>Pursue offline hobbies and interests</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Take Regular Breaks</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Step away every 30-45 minutes</li>
                  <li>Take days off from fantasy cricket</li>
                  <li>Engage in physical activity during breaks</li>
                  <li>Practice the 20-20-20 rule for eye health</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Maintain Perspective</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Remember it's just a game</li>
                  <li>Don't take losses personally</li>
                  <li>Celebrate learning, not just winning</li>
                  <li>Keep fantasy cricket in proper context</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Monitor Your Emotions</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Notice how fantasy cricket affects your mood</li>
                  <li>Stop if you feel frustrated or anxious</li>
                  <li>Don't play when emotionally distressed</li>
                  <li>Seek healthier coping mechanisms for stress</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Seek Support</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Talk to friends or family about concerns</li>
                  <li>Join support groups if needed</li>
                  <li>Contact our support team for help</li>
                  <li>Consider professional counseling if struggling</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Taking a Break */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">When and How to Take a Break</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recognizing When You Need a Break</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>Consider taking a break from fantasy cricket if:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You're experiencing any of the warning signs mentioned above</li>
                  <li>Fantasy cricket is causing stress rather than enjoyment</li>
                  <li>You're neglecting important areas of your life</li>
                  <li>You feel compelled to play even when you don't want to</li>
                  <li>Your relationships are suffering</li>
                  <li>You're using fantasy cricket to avoid dealing with problems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How to Take an Effective Break</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p><strong>1. Decide on a Break Duration:</strong> Start with at least one week, or longer if needed.</p>
                <p><strong>2. Inform Your Circle:</strong> Tell friends or family about your break for accountability.</p>
                <p><strong>3. Remove Temptations:</strong> Log out, remove bookmarks, or temporarily uninstall apps.</p>
                <p><strong>4. Fill the Time:</strong> Plan alternative activities—exercise, hobbies, socializing, reading.</p>
                <p><strong>5. Reflect:</strong> Use the break to assess your relationship with fantasy cricket.</p>
                <p><strong>6. Return Mindfully:</strong> If you return, set new boundaries and stick to them.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Support Resources</h2>
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">If You Need Help</h3>
                <p className="text-muted-foreground mb-4">
                  If you're struggling with compulsive gaming behaviors or need support, please reach out:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Talk to Someone:</strong> Share your concerns with a trusted friend, family member, or counselor</li>
                  <li><strong>Professional Help:</strong> Consider speaking with a mental health professional who specializes in behavioral issues</li>
                  <li><strong>Contact Us:</strong> Reach out to our support team at <a href="mailto:support@imanitiatesports.com" className="text-primary hover:underline">support@imanitiatesports.com</a></li>
                  <li><strong>Support Groups:</strong> Look for local or online support groups for gaming-related concerns</li>
                </ul>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="font-semibold mb-2">Remember:</p>
                <p className="text-muted-foreground">
                  Seeking help is a sign of strength, not weakness. Your well-being is more important than any game. We're here to support you in maintaining a healthy, balanced relationship with fantasy cricket.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to Your Well-Being</h2>
          <div className="prose prose-lg max-w-none text-primary-foreground/90 space-y-4">
            <p>
              At IMAGINITIATE, your health and happiness matter more than your engagement on our platform. We're committed to promoting responsible gaming and providing resources to help you maintain balance.
            </p>
            <p>
              If you ever feel that fantasy cricket is negatively impacting your life, please don't hesitate to reach out. We're here to help, and we'll support you in whatever way is best for your well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/50">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 IMAGINITIATE VENTURES PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </footer>
    </Layout>
  );
}
