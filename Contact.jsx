
import  { useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    if (!name || !email || !subject || !message) {
      alert('يرجى ملء جميع الحقول');
      return;
    }

    const mailtoLink = `mailto:zyaddorgham4@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `الاسم: ${name}\nالبريد الإلكتروني: ${email}\n\nالرسالة:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>تواصل معنا</h1>
        <p>نحن هنا لمساعدتك على مدار الساعة</p>
      </div>

      <div className="contact-cards">
        <div className="contact-card whatsapp">
          <span className="contact-icon">📱</span>
          <h3>واتساب</h3>
          <p>+201068980328</p>
          <span className="contact-tag">متاح 24/7</span>
        </div>
        <div className="contact-card email">
          <span className="contact-icon">✉️</span>
          <h3>البريد الإلكتروني</h3>
          <p>zyaddorgham4@gmail.com</p>
          <span className="contact-tag">الرد خلال 24 ساعة</span>
        </div>
        <div className="contact-card phone">
          <span className="contact-icon">📞</span>
          <h3>الهاتف</h3>
          <p>+201068980328</p>
          <span className="contact-tag">من 9 صباحاً إلى 9 مساءً</span>
        </div>
      </div>

      <div className="contact-form-container">
        <h2>أرسل لنا رسالة</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>الاسم الكامل</label>
              <input type="text" placeholder="أدخل اسمك" ref={nameRef} required />
            </div>
            <div className="form-group">
              <label>البريد الإلكتروني</label>
              <input type="email" placeholder="أدخل بريدك الإلكتروني" ref={emailRef} required />
            </div>
          </div>
          <div className="form-group">
            <label>الموضوع</label>
            <input type="text" placeholder="أدخل موضوع الرسالة" ref={subjectRef} required />
          </div>
          <div className="form-group">
            <label>الرسالة</label>
            <textarea rows="5" placeholder="اكتب رسالتك هنا..." ref={messageRef} required></textarea>
          </div>
          <button type="submit" className="send-btn">إرسال الرسالة</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;