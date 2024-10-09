const FAQs = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-10">FAQs</h2>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h3 className="font-bold text-xl mb-2">How do I get started?</h3>
          <p>Simply sign up and choose a template to begin building your website.</p>
        </div>
        <div className="mb-8">
          <h3 className="font-bold text-xl mb-2">What if I need help?</h3>
          <p>We offer 24/7 customer support to assist with any issues you may have.</p>
        </div>
        <div className="mb-8">
          <h3 className="font-bold text-xl mb-2">Can I upgrade my plan later?</h3>
          <p>Yes, you can upgrade or downgrade your plan at any time from your account settings.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;