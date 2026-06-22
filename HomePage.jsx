
import './HomePage.css';
import {Link} from 'react-router-dom'
const HomePage = () => {

  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">شوب ستريم</h1>
          <p className="hero-subtitle">أحدث المنتجات التقنية بأفضل الأسعار</p>
          <Link to={'/products'}>
          <button className="hero-btn">تسوق الآن</button>

          </Link>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>توصيل سريع</h3>
            <p>توصيل خلال 2-5 أيام لجميع المدن</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>دفع آمن</h3>
            <p>بوابات دفع مشفرة لحماية بياناتك</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>استبدال مجاني</h3>
            <p>استبدال خلال 30 يومًا من الشراء</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>تقييمات حقيقية</h3>
            <p>من عملاء حقيقيين ومُتحقق منها</p>
          </div>
        </div>
      </section>

      <section className="about-store">
        <div className="about-container">
          <h2>من نحن</h2>
          <p>
            تأسس متجر شوب ستريم عام 2025 بهدف توفير أحدث الأجهزة والإلكترونيات بأسعار تنافسية.
            نتميز بجودة المنتجات وخدمة العملاء على مدار الساعة. نقدم تشكيلة واسعة من الهواتف،
            الحواسيب المحمولة، الإكسسوارات، والأجهزة المنزلية الذكية.
          </p>
          <p>
            رؤيتنا هي أن نكون الوجهة الأولى للتسوق الإلكتروني في العالم العربي، من خلال تجربة
            تسوق سلسة وآمنة تلبي احتياجات كل عميل.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;