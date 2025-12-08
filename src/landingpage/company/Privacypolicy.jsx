


export  function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-Nunito">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy for HappyExam</h1>
      <p className="mb-6"><strong className="text-sm font-semibold">Last Updated:</strong> December 6, 2025</p>

      <section className="mb-8 text-sm">
        <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
        <p className="mb-3">
          Welcome to HappyExam! We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use the HappyExam application and website (collectively, the "Service").
        </p>
        <p>
          By using HappyExam, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Service.
        </p>
      </section>

      <section className="mb-8 text-sm">
        <h2 className="text-2xl font-semibold mb-3">1. Information we collect</h2>
        
        <h3 className="text-sm font-semibold mb-2">1.1 Personal information you provide</h3>
        <p className="mb-3">When you register for an account on HappyExam, we collect the following information:</p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong className="text-sm font-semibold">First name</strong> - To personalize your experience</li>
          <li><strong className="text-sm font-semibold">Last name</strong> - To identify your account</li>
          <li><strong className="text-sm font-semibold">Email address</strong> - For account verification, communication, and password recovery</li>
          <li><strong className="text-sm font-semibold">Password</strong> - Encrypted and stored securely for account access</li>
          <li><strong className="text-sm font-semibold">Age</strong> - To verify you meet our minimum age requirement (14 years) and comply with child protection laws</li>
        </ul>

        <h3 className="text-sm font-semibold mb-2">1.2 Usage and performance data</h3>
        <p className="mb-3">We automatically collect information about how you interact with our Service:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Questions attempted and solved</li>
          <li>Quiz scores and performance metrics</li>
          <li>Time spent on the app</li>
          <li>Study patterns and progress tracking</li>
          <li>Leaderboard rankings (calculated based on your quiz performance)</li>
        </ul>

        <h3 className="text-sm font-semibold mb-2">1.3 Technical information</h3>
        <p className="mb-3">We collect technical data to improve our Service:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Device information (model, operating system)</li>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>App usage statistics via Google Analytics</li>
        </ul>

        <h3 className="text-sm font-semibold mb-2">1.4 Payment information</h3>
        <p className="mb-3">When you purchase a subscription through Razorpay:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Payment transaction details are processed securely by Razorpay</li>
          <li>We do NOT store your credit card, debit card, or banking information</li>
          <li>We only retain transaction confirmation details for your subscription records</li>
        </ul>
      </section>

      <section className="mb-8 text-sm">
        <h2 className="text-2xl font-semibold mb-3">2. How we use your information</h2>
        
        <h3 className="text-sm font-semibold mb-2">2.1 Service delivery</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>To create and manage your account</li>
          <li>To provide access to study materials and MCQ questions</li>
          <li>To track your learning progress and performance</li>
          <li>To calculate and display leaderboard rankings</li>
        </ul>

        <h3 className="text-sm font-semibold mb-2">2.2 Personalization</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>To customize your learning experience</li>
          <li>To recommend relevant study content based on your class and subjects</li>
        </ul>

        <h3 className="text-sm font-semibold mb-2">2.3 Communication</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>To send important account notifications</li>
          <li>To respond to your inquiries and support requests</li>
          <li>To send updates about new features or content (you can opt-out)</li>
        </ul>

        <h3 className="text-sm font-semibold mb-2">2.4 Analytics and improvement</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>To analyze user behavior through Google analytics</li>
          <li>To understand which features are most popular</li>
          <li>To improve app performance and user experience</li>
          <li>To identify and fix technical issues</li>
        </ul>

        <h3 className="text-sm font-semibold mb-2">2.5 Advertising</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>To display relevant advertisements through Google AdMob</li>
          <li>To monetize our free content and support app development</li>
        </ul>

        <h3 className="text-sm font-semibold mb-2">2.6 Subscription management</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>To process payments through Razorpay</li>
          <li>To manage your subscription status and access to premium features</li>
          <li>To provide receipts and billing information</li>
        </ul>
      </section>

      <section className="mb-8 text-sm">
        <h2 className="text-2xl font-semibold mb-3">3. Age restrictions</h2>
        <p className="mb-3">
          HappyExam is designed for students preparing for board examinations. To use our Service, you must:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Be at least <strong className="text-sm font-semibold">14 years of age</strong></li>
          <li>Be no older than <strong className="text-sm font-semibold">150 years of age</strong></li>
        </ul>
        <p>
          If we discover that a user under 14 years of age has registered, we will delete their account and all associated data immediately. If you are a parent or guardian and believe your child under 14 has provided us with personal information, please contact us at (support@happyexam.in)
        </p>
      </section>

      <section className="mb-8 text-sm">
        <h2 className="text-2xl font-semibold mb-3">4. Data storage and security</h2>
        
        <h3 className="text-sm font-semibold mb-2">4.1 Where we store your data</h3>
        <p className="mb-3">
          Your data is stored securely on <strong className="text-sm font-semibold">MongoDB Atlas</strong>, a cloud database service. MongoDB Atlas provides:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Industry-standard encryption</li>
          <li>Secure server infrastructure</li>
          <li>Regular security updates and monitoring</li>
          <li>Data backup and recovery systems</li>
        </ul>

        <h3 className="text-sm font-semibold mb-2">4.2 How we protect your data</h3>
        <p className="mb-3">We implement appropriate security measures to protect your personal information:</p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong className="text-sm font-semibold">Password encryption</strong> - Your password is hashed and cannot be viewed by anyone, including our team</li>
          <li><strong className="text-sm font-semibold">Secure connections</strong> - All data transmission uses HTTPS/SSL encryption</li>
          <li><strong className="text-sm font-semibold">Access controls</strong> - Limited access to data by authorized personnel only</li>
          <li><strong className="text-sm font-semibold">Regular security Audits</strong> - We monitor our systems for vulnerabilities</li>
        </ul>
        <p>
          However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-8 text-sm">
        <h2 className="text-2xl font-semibold mb-3">5. Third-party services</h2>
        <p className="mb-3">We use the following third-party services that may collect data:</p>

        <h3 className="text-sm font-semibold mb-2">5.1 Google analytics</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><strong className="text-sm font-semibold">Purpose:</strong> To analyze app usage and user behavior</li>
          <li><strong className="text-sm font-semibold">Data Collected:</strong> Device information, usage patterns, demographics</li>
          <li><strong className="text-sm font-semibold">Privacy Policy:</strong> <a href="https://policies.google.com/privacy" className="underline">Google Analytics Privacy Policy</a></li>
        </ul>

        <h3 className="text-sm font-semibold mb-2">5.2 Google adMob</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><strong className="text-sm font-semibold">Purpose:</strong> To display advertisements in the app</li>
          <li><strong className="text-sm font-semibold">Data collected:</strong> Device identifiers, ad interaction data</li>
          <li><strong className="text-sm font-semibold">Privacy policy:</strong> <a href="https://support.google.com/admob/answer/6128543" className="underline">Google adMob Privacy policy</a></li>
          <li><strong className="text-sm font-semibold">Ad Personalization:</strong> You can opt-out of personalized ads through your device settings</li>
        </ul>

        <h3 className="text-sm font-semibold mb-2">5.3 Razorpay</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><strong className="text-sm font-semibold">Purpose:</strong> To process subscription payments securely</li>
          <li><strong className="text-sm font-semibold">Data collected:</strong> Payment information (processed directly by Razorpay, not stored by us)</li>
          <li><strong className="text-sm font-semibold">Privacy policy:</strong> <a href="https://razorpay.com/privacy/" className="underline">Razorpay Privacy policy</a></li>
        </ul>
      </section>

      <section className="mb-8 text-sm">
        <h2 className="text-2xl font-semibold mb-3">6. Data sharing and disclosure</h2>
        
        <h3 className="text-sm font-semibold mb-2">6.1 We dO nOT sell your data</h3>
        <p className="mb-4">We do not sell, trade, or rent your personal information to third parties.</p>

        <h3 className="text-sm font-semibold mb-2">6.2 Limited sharing</h3>
        <p className="mb-3">We may share your information only in the following circumstances:</p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong className="text-sm font-semibold">With Your consent</strong> - When you explicitly authorize us to share your information</li>
          <li><strong className="text-sm font-semibold">Service providers</strong> - With trusted third-party services (Google Analytics, AdMob, Razorpay) as described above</li>
          <li><strong className="text-sm font-semibold">Legal requirements</strong> - When required by law, court order, or government regulation</li>
          <li><strong className="text-sm font-semibold">Safety and security</strong> - To protect the rights, property, or safety of HappyExam, our users, or others</li>
          <li><strong className="text-sm font-semibold">Business transfers</strong> - In case of merger, acquisition, or sale of assets (users will be notified)</li>
        </ul>

        <h3 className="text-sm font-semibold mb-2">6.3 Leaderboard data</h3>
        <p className="mb-3">Your performance rankings on the leaderboard may be visible to other users, showing:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Your first name (or username if implemented)</li>
          <li>Your ranking position</li>
          <li>Your score/performance metrics</li>
        </ul>
        <p>No other personal information (email, age, last name) is displayed publicly.</p>
      </section>

      <section className="mb-8 text-sm">
        <h2 className="text-2xl font-semibold mb-3">7. Your data rights</h2>
        <p className="mb-3">You have the following rights regarding your personal data:</p>

        <h3 className="text-sm font-semibold mb-2">7.1 Access and update</h3>
        <p className="mb-4">You can access and update your account information at any time through the app settings</p>

        <h3 className="text-sm font-semibold mb-2">7.2 Account deletion</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>You have the right to delete your account and all associated data</li>
          <li>To delete your account, go to Settings → Account → Delete Account</li>
          <li>Upon deletion, all your personal information, progress data, and quiz history will be permanently removed</li>
          <li>This action cannot be undone</li>
        </ul>

        <h3 className="text-sm font-semibold mb-2">7.3 Data portability</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>You can request a copy of your data by contacting us at [your email]</li>
          <li>We will provide your data in a structured, commonly used format</li>
        </ul>

        <h3 className="text-sm font-semibold mb-2">7.4 Opt-out of communications</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>You can unsubscribe from promotional emails by clicking the unsubscribe link</li>
          <li>Important account and security notifications cannot be opted out</li>
        </ul>

        <h3 className="text-sm font-semibold mb-2">7.5 Opt-out of personalized ads</h3>
        <p className="mb-2">You can disable personalized ads through your device settings:</p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong className="text-sm font-semibold">Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
          <li><strong className="text-sm font-semibold">iOS:</strong> Settings → Privacy → Advertising → Limit Ad Tracking</li>
        </ul>
      </section>

      <section className="mb-8 text-sm">
        <h2 className="text-2xl font-semibold mb-3">8. Data retention</h2>
        <p className="mb-3">
          We retain your personal information for as long as your account is active or as needed to provide you services. Specifically:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong className="text-sm font-semibold">Active accounts:</strong> Data retained indefinitely while your account is active</li>
          <li><strong className="text-sm font-semibold">Deleted accounts:</strong> Data permanently deleted within 30 days of account deletion</li>
          <li><strong className="text-sm font-semibold">Backup copies:</strong> May be retained for up to 90 days in backup systems</li>
          <li><strong className="text-sm font-semibold">Legal requirements:</strong> Some data may be retained longer if required by law</li>
        </ul>
      </section>

      <section className="mb-8 text-sm">
        <h2 className="text-2xl font-semibold mb-3">9. Children's privacy</h2>
        <p className="mb-3">We take children's privacy seriously. While our minimum age is 14 years:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>We do not knowingly collect data from children under 14</li>
          <li>If we discover a user is under 14, we will delete their account immediately</li>
          <li>Parents/guardians can contact us to request deletion of their child's data</li>
          <li>We comply with applicable child protection laws including COPPA (Children's Online Privacy Protection Act)</li>
        </ul>
      </section>

      <section className="mb-8 text-sm">
        <h2 className="text-2xl font-semibold mb-3">10. International data transfers</h2>
        <p className="mb-3">
          Your information may be transferred to and stored on servers located outside your country of residence. By using HappyExam, you consent to the transfer of your information to countries that may have different data protection laws than your country.
        </p>
        <p>We ensure appropriate safeguards are in place to protect your data during international transfers.</p>
      </section>

      <section className="mb-8 text-sm">
        <h2 className="text-2xl font-semibold mb-3">11. Cookies and tracking technologies</h2>
        <p className="mb-3">We use cookies and similar tracking technologies to:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Keep you logged in</li>
          <li>Remember your preferences</li>
          <li>Analyze app usage through Google Analytics</li>
          <li>Deliver personalized advertisements through AdMob</li>
        </ul>
        <p>
          You can control cookie settings through your browser or device settings, but disabling cookies may limit some functionality.
        </p>
      </section>

      <section className="mb-8 text-sm">
        <h2 className="text-2xl font-semibold mb-3">12. Changes to This privacy policy</h2>
        <p className="mb-3">
          We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons.
        </p>
        <p className="mb-3">When we make changes:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>We will update the "Last Updated" date at the top of this policy</li>
          <li>We will notify you through the app or via email for significant changes</li>
          <li>Continued use of the Service after changes constitutes acceptance of the updated policy</li>
        </ul>
        <p>We encourage you to review this Privacy Policy periodically to stay informed about how we protect your data.</p>
      </section>

      <section className="mb-8 text-sm">
        <h2 className="text-2xl font-semibold mb-3">13. Your consent</h2>
        <p className="mb-3">By using HappyExam, you consent to:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>The collection and use of your information as described in this Privacy Policy</li>
          <li>The use of cookies and tracking technologies</li>
          <li>The processing of your data by third-party services (Google analytics, AdMob, Razorpay)</li>
        </ul>
      </section>

      <section className="mb-8 text-sm">
        <h2 className="text-2xl font-semibold mb-3">14. Contact us</h2>
        <p className="mb-3">
          If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
        </p>
        <p className="mb-2"><strong className="text-sm font-semibold">HappyExam Support Team</strong></p>
        <ul className="list-none ml-0 mb-4">
          <li><strong className="text-sm font-semibold">Email:</strong> support@happyexam.in</li>
          <li><strong className="text-sm font-semibold">Website:</strong> https://www.happyexam.in</li>
          <li><strong className="text-sm font-semibold">Address:</strong> Rajeev gandhi nagar, Ayodhya road,Bhopal,India</li>
        </ul>
        <p>We will respond to your inquiry within 30 days.</p>
      </section>

      <section className="mb-8 text-sm">
        <h2 className="text-2xl font-semibold mb-3">15. Governing law</h2>
        <p>
          This Privacy Policy is governed by the laws of India. Any disputes arising from this policy will be subject to the exclusive jurisdiction of the courts in (Bhopal, Madhay pradesh, India).
        </p>
      </section>

      <section className="mb-8 text-sm">
        <h2 className="text-2xl font-semibold mb-3">Summary</h2>
        <p>
          We collect your basic information (name, email, age) and usage data to provide you with an excellent learning experience. We use Google Analytics for app improvement, AdMob for ads, and Razorpay for secure payments. We DO NOT share your data with third parties, and you can delete your account anytime. Your data is stored securely on MongoDB Atlas.
        </p>
        <p className="mt-4">Thank you for trusting HappyExam with your learning journey! 📚✨</p>
      </section>

     
    </div>
  );
}

export default PrivacyPolicy;

