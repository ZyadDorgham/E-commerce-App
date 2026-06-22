

import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>عن شوب ستريم</h1>
        <p>قصة نجاحنا ورؤيتنا لمستقبل التسوق الإلكتروني</p>
      </div>

      <div className="about-story">
        <h2>قصتنا</h2>
        <p>
          انطلق متجر شوب ستريم في عام 2025 بحلم بسيط: تغيير طريقة تسوق الإلكترونيات في العالم العربي.
          من خلال منصة ذكية تجمع بين أحدث التقنيات وأسهل طرق الدفع وأسرع وسائل التوصيل.
        </p>
        <p>
          بدأنا بفريق صغير من 5 أشخاص، واليوم نخدم آلاف العملاء شهرياً. نؤمن بأن الجودة والثقة هما أساس
          أي علاقة تجارية ناجحة.
        </p>
      </div>

      <div className="about-mission-vision">
        <div className="mission-card">
          <h3>📌 رسالتنا</h3>
          <p>تقديم تجربة تسوق إلكتروني سلسة وآمنة، مع توفير منتجات أصلية بأفضل الأسعار وخدمة عملاء استثنائية.</p>
        </div>
        <div className="vision-card">
          <h3>🔭 رؤيتنا</h3>
          <p>أن نكون المنصة الأولى في الشرق الأوسط للمنتجات التقنية، ونقود التحول الرقمي في قطاع التجارة الإلكترونية.</p>
        </div>
      </div>

      <div className="about-values">
        <h2>قيمنا الأساسية</h2>
        <div className="values-grid">
          <div className="value-item">
            <span className="value-icon">✨</span>
            <h4>الجودة أولاً</h4>
            <p>نختار منتجاتنا بعناية فائقة لضمان رضاك التام.</p>
          </div>
          <div className="value-item">
            <span className="value-icon">🤝</span>
            <h4>الثقة والشفافية</h4>
            <p>نعرض لك كل التفاصيل بوضوح، ولا يوجد أي رسوم خفية.</p>
          </div>
          <div className="value-item">
            <span className="value-icon">⚡</span>
            <h4>السرعة في التوصيل</h4>
            <p>شريكنا مع أفضل شركات الشحن لتوصيل طلبك في أسرع وقت.</p>
          </div>
          <div className="value-item">
            <span className="value-icon">💡</span>
            <h4>الابتكار المستمر</h4>
            <p>نطور منصتنا يومياً لتكون أكثر ذكاءً وسهولة.</p>
          </div>
        </div>
      </div>

      <div className="about-stats">
        <h2>إنجازاتنا بالأرقام</h2>
        <div className="stats-container">
          <div className="stat">
            <span className="stat-number">+10,000</span>
            <span className="stat-label">عميل سعيد</span>
          </div>
          <div className="stat">
            <span className="stat-number">+50</span>
            <span className="stat-label">علامة تجارية</span>
          </div>
          <div className="stat">
            <span className="stat-number">+200</span>
            <span className="stat-label">منتج</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">دعم فني</span>
          </div>
        </div>
      </div>

      <div className="about-team">
        <h2>فريقنا</h2>
        <p>نحن مجموعة من الشباب الطموح والخبراء في التجارة الإلكترونية والتقنية.</p>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">👨‍💻</div>
            <h4>أحمد منصور</h4>
            <p>المؤسس والرئيس التنفيذي</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👩‍💼</div>
            <h4>سارة خالد</h4>
            <p>مديرة التسويق</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">🧑‍💻</div>
            <h4>محمد طارق</h4>
            <p>مدير التكنولوجيا</p>
          </div>
        </div>
      </div>

      <div className="about-contact">
        <h2>تواصل معنا</h2>
        <p>لديك استفسار؟ فريق الدعم جاهز لمساعدتك على مدار الساعة.</p>
        <div className="contact-buttons">
          <button className="contact-btn email">📧 البريد الإلكتروني</button>
<a
  className="contact-btn whatsapp"
  href="https://wa.me/201068980328?text=Hello%20I%20need%20help"
  target="_blank"
  rel="noopener noreferrer"
>
  📱 واتساب
</a>
          <button className="contact-btn phone">📞 خدمة العملاء</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;