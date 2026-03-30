<template>
  <div class="login-page" dir="rtl">
    
    <!-- القسم اليمين: نموذج تسجيل الدخول -->
    <div class="login-form-side">
      <div class="login-form-container">
        
        <!-- اللوجو والاسم -->
        <div class="logo-row">
          <div class="logo-icon">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Z"/><path d="m8 22 2.3-2.3a3 3 0 0 0 0-4.2l-1.8-1.8a3 3 0 0 0-4.2 0L2 16"/><path d="m9 9 11.7 11.7a4.2 4.2 0 1 0 0-6L13.4 7.4a2 2 0 0 1 0-2.8L15 3"/></svg>
          </div>
          <h1 class="logo-text">ملحمة <span class="logo-highlight">الصديق</span></h1>
        </div>

        <!-- عناوين الترحيب -->
        <div class="welcome-text">
          <h2>مرحباً بك مجدداً</h2>
          <p>سجل دخولك لطلب أفضل قطع اللحم من المزرعة مباشرة</p>
        </div>

        <!-- الفورم -->
        <form class="login-form" @submit.prevent>
          <div class="form-group">
            <label>البريد الإلكتروني أو رقم الهاتف</label>
            <div class="input-wrapper">
              <input type="text" placeholder="name@example.com" />
              <div class="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="label-row">
              <label>كلمة المرور</label>
              <a href="#" class="forgot-link">نسيت كلمة المرور؟</a>
            </div>
            <div class="input-wrapper">
              <input type="password" placeholder="••••••••" />
              <div class="input-icon clickable">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
            </div>
          </div>

          <!-- تذكرني -->
          <div class="remember-row">
            <input type="checkbox" id="remember" />
            <label for="remember">تذكرني على هذا الجهاز</label>
          </div>

          <!-- زر الدخول -->
          <button type="submit" class="login-btn">
            تسجيل الدخول
          </button>
        </form>

        <!-- footer -->
        <div class="form-footer">
           <p>ليس لديك حساب؟ <a href="#">إنشاء حساب جديد</a></p>
        </div>

        <div class="footer-links">
           <a href="#">سياسة الخصوصية</a>
           <a href="#">شروط الخدمة</a>
           <a href="#">اتصل بنا</a>
        </div>

      </div>
    </div>

    <!-- القسم اليسار: الصورة -->
    <div class="login-image-side">
      <img src="/images/Image.png" alt="Premium Meat" />
      <div class="image-overlay"></div>
      <div class="image-text">
        <h2>
          جودة يمكنك تذوقها،<br/>
          ثقة تتوارثها الأجيال.
        </h2>
        <p>نوفر أجود أنواع اللحوم من المزارع المحلية مباشرة إلى مائدتكم.</p>
        <span class="since-text">Quality Since 1994</span>
      </div>
    </div>

  </div>
</template>

<script setup>
definePageMeta({
  layout: false
});
</script>

<style scoped>
/* === الصفحة الرئيسية === */
.login-page {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #fff;
  font-family: 'Cairo', sans-serif;
}

/* === القسم الأيمن - الفورم === */
.login-form-side {
  width: 50%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
  background: #fafafa;
  overflow-y: auto;
}

.login-form-container {
  width: 100%;
  max-width: 400px;
}

/* اللوجو */
.logo-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 48px;
}

.logo-icon {
  width: 48px;
  height: 48px;
  background: #8A0000;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(138, 0, 0, 0.3);
  transform: rotate(-3deg);
  transition: transform 0.3s ease;
}

.logo-icon:hover {
  transform: rotate(0deg);
}

.logo-text {
  font-size: 24px;
  font-weight: 900;
  color: #0f172a;
  line-height: 1;
}

.logo-highlight {
  color: #8A0000;
  font-weight: 700;
}

/* عناوين الترحيب */
.welcome-text {
  text-align: right;
  margin-bottom: 32px;
}

.welcome-text h2 {
  font-size: 30px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 8px 0;
  letter-spacing: -0.5px;
}

.welcome-text p {
  font-size: 15px;
  color: #71717a;
  margin: 0;
  font-weight: 500;
}

/* الفورم */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  text-align: right;
}

.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  color: #3f3f46;
  margin-bottom: 6px;
}

.label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin-bottom: 6px;
}

.label-row label {
  margin-bottom: 0;
}

.forgot-link {
  font-size: 12px;
  font-weight: 700;
  color: #8A0000;
  text-decoration: none;
  transition: all 0.2s;
}

.forgot-link:hover {
  text-decoration: underline;
}

.input-wrapper {
  position: relative;
}

.input-wrapper input {
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid #e4e4e7;
  background: #fff;
  font-size: 15px;
  font-family: 'Cairo', sans-serif;
  text-align: right;
  color: #18181b;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.input-wrapper input::placeholder {
  color: #c4c4cc;
}

.input-wrapper input:focus {
  border-color: #8A0000;
  box-shadow: 0 0 0 4px rgba(138, 0, 0, 0.08);
}

.input-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #a1a1aa;
  display: flex;
  pointer-events: none;
  transition: color 0.2s;
}

.input-icon.clickable {
  pointer-events: auto;
  cursor: pointer;
}

.input-icon.clickable:hover {
  color: #8A0000;
}

.input-wrapper input:focus ~ .input-icon {
  color: #8A0000;
}

/* تذكرني */
.remember-row {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  flex-direction: row-reverse;
}

.remember-row input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: #8A0000;
  cursor: pointer;
}

.remember-row label {
  font-size: 14px;
  color: #52525b;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
}

/* زر الدخول */
.login-btn {
  width: 100%;
  padding: 16px;
  background: #8A0000;
  color: #fff;
  font-size: 17px;
  font-weight: 900;
  font-family: 'Cairo', sans-serif;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(138, 0, 0, 0.25);
  transition: all 0.2s ease;
}

.login-btn:hover {
  background: #7a0000;
  box-shadow: 0 8px 28px rgba(138, 0, 0, 0.35);
}

.login-btn:active {
  transform: scale(0.98);
}

/* Footer */
.form-footer {
  text-align: center;
  padding-top: 28px;
}

.form-footer p {
  font-size: 14px;
  color: #71717a;
}

.form-footer a {
  color: #8A0000;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
}

.form-footer a:hover {
  text-decoration: underline;
}

.footer-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding-top: 48px;
}

.footer-links a {
  font-size: 11px;
  color: #a1a1aa;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #8A0000;
}

/* === القسم الأيسر - الصورة === */
.login-image-side {
  width: 50%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.login-image-side img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.65);
}

.image-text {
  position: absolute;
  bottom: 60px;
  left: 0;
  right: 0;
  padding: 0 48px;
  color: #fff;
  z-index: 10;
  text-align: right;
}

.image-text h2 {
  font-size: 42px;
  font-weight: 900;
  line-height: 1.3;
  margin: 0 0 16px 0;
}

.image-text p {
  font-size: 18px;
  color: #cbd5e1;
  font-weight: 500;
  margin: 0;
}

.since-text {
  display: block;
  margin-top: 16px;
  font-size: 13px;
  color: #94a3b8;
  font-style: italic;
  font-family: 'Outfit', sans-serif;
  opacity: 0.7;
}

/* === Responsive - للموبايل === */
@media (max-width: 768px) {
  .login-page {
    flex-direction: column;
  }
  
  .login-form-side {
    width: 100%;
    padding: 32px 24px;
    min-height: 100vh;
  }
  
  .login-image-side {
    display: none;
  }
}
</style>
