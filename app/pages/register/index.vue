<template>
  <div class="register-page" dir="rtl">
    
    <!-- القسم اليمين: نموذج إنشاء الحساب -->
    <div class="register-form-side">
      <div class="register-form-container">
        
        <!-- اللوجو والاسم -->
        <NuxtLink to="/" class="logo-row">
          <div class="logo-icon">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Z"/><path d="m8 22 2.3-2.3a3 3 0 0 0 0-4.2l-1.8-1.8a3 3 0 0 0-4.2 0L2 16"/><path d="m9 9 11.7 11.7a4.2 4.2 0 1 0 0-6L13.4 7.4a2 2 0 0 1 0-2.8L15 3"/></svg>
          </div>
          <h1 class="logo-text">ملحمة <span class="logo-highlight">الصديق</span></h1>
        </NuxtLink>

        <!-- عناوين الترحيب -->
        <div class="welcome-text">
          <h2>إنشاء حساب جديد</h2>
          <p>انضم إلينا للاستمتاع بأفضل جودة من قطع اللحم لبيتك</p>
        </div>

        <!-- الفورم -->
        <form class="register-form" @submit.prevent="">
          <div class="form-group">
            <label>الاسم الكامل</label>
            <div class="input-wrapper">
              <input v-model="name" type="text" placeholder="أدخل اسمك بالكامل" />
              <div class="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
            </div>
          </div>

          <div class="form-group grid-cols-2">
            <div class="w-full">
              <label>رقم الهاتف</label>
              <div class="input-wrapper">
                <input v-model="phone" type="tel" placeholder="01xxxxxxxxx" />
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>البريد الإلكتروني</label>
            <div class="input-wrapper">
              <input v-model="email" type="email" placeholder="example@mail.com" />
              <div class="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>كلمة المرور</label>
            <div class="input-wrapper">
              <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="••••••••" />
              <div class="input-icon clickable" @click="showPassword = !showPassword">
                <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>تأكيد كلمة المرور</label>
            <div class="input-wrapper">
              <input v-model="confirmPassword" :type="showConfirmPassword ? 'text' : 'password'" placeholder="••••••••" />
              <div class="input-icon clickable" @click="showConfirmPassword = !showConfirmPassword">
                <svg v-if="!showConfirmPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
              </div>
            </div>
          </div>

          <!-- زر تسجيل الحساب -->
          <button type="submit" class="register-btn">
            إنشاء حساب
          </button>
        </form>

        <!-- footer -->
        <div class="form-footer">
           <p>لديك حساب بالفعل؟ <NuxtLink to="/login">تسجيل الدخول</NuxtLink></p>
        </div>

      </div>
    </div>

    <!-- القسم الأيسر: الصورة -->
    <div class="register-image-side">
      <img src="/images/Image.png" alt="Premium Meat" />
      <div class="image-overlay"></div>
      <div class="image-text">
        <h2>
          أكمل طلبك بلمسة واحدة،<br/>
          فقط للجودة الصادقة.
        </h2>
        <p>انضم الآن لمجتمع ملحمة الصديق والطلب أصبح أسرع بكثير.</p>
        <span class="since-text">Quality Since 1994</span>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

definePageMeta({
  layout: false
});

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const name = ref("");
const phone = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");



const { $api } = useNuxtApp();

const handleRegister = async () => {
  try {
    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("phone", phone.value);
    formData.append("email", email.value);
    formData.append("password", password.value);
    formData.append("password_confirmation", confirmPassword.value);

    const res = await $api.post("/register", formData);

    if (res.data.success) {
      // بعد التسجيل، السيرفر غالباً بيعمل login تلقائي وبيرجع Session
      navigateTo("/");
    }
  } catch (err) {
    console.error("Register Error:", err.response?.data?.message || err.message);
    alert(err.response?.data?.message || "حدث خطأ أثناء إنشاء الحساب");
  }
};

</script>

<style scoped>
/* === الصفحة الرئيسية === */
.register-page {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #fff;
  font-family: 'Cairo', sans-serif;
}

/* === القسم الأيمن - الفورم === */
.register-form-side {
  width: 50%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
  background: var(--color-bone, #fafafa); /* باستخدام متغير Tailwind */
  overflow-y: auto;
}

.register-form-container {
  width: 100%;
  max-width: 440px;
}

/* اللوجو */
.logo-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
}

.logo-icon {
  width: 48px;
  height: 48px;
  background: var(--color-primary, #8A0000); /* باستخدام متغير Tailwind */
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(138, 0, 0, 0.3);
  transform: rotate(-3deg);
}

.logo-text {
  font-size: 24px;
  font-weight: 900;
  color: var(--color-secondary, #0f172a); /* باستخدام متغير Tailwind */
  line-height: 1;
}

.logo-highlight {
  color: var(--color-primary, #8A0000); /* باستخدام متغير Tailwind */
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
  color: var(--color-secondary, #0f172a);
  margin: 0 0 8px 0;
}

.welcome-text p {
  font-size: 15px;
  color: #71717a;
  margin: 0;
}

/* الفورم */
.register-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
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

.input-wrapper {
  position: relative;
}

.input-wrapper input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #e4e4e7;
  background: #fff;
  font-size: 15px;
  font-family: 'Cairo', sans-serif;
  text-align: right;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.input-wrapper input:focus {
  border-color: var(--color-primary, #8A0000);
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
}

.input-icon.clickable {
  pointer-events: auto;
  cursor: pointer;
}

/* زر التسجيل */
.register-btn {
  width: 100%;
  padding: 16px;
  background: var(--color-primary, #8A0000);
  color: #fff;
  font-size: 17px;
  font-weight: 900;
  font-family: 'Cairo', sans-serif;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(138, 0, 0, 0.25);
  margin-top: 10px;
}

.register-btn:hover {
  background: #7a0000;
  transform: translateY(-1px);
}

/* Footer */
.form-footer {
  text-align: center;
  padding-top: 24px;
}

.form-footer p {
  font-size: 14px;
  color: #71717a;
}

.form-footer a {
  color: var(--color-primary, #8A0000);
  font-weight: 700;
  text-decoration: none;
}

/* === القسم الأيسر - الصورة === */
.register-image-side {
  width: 50%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.register-image-side img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: var(--color-secondary, rgba(15, 23, 42, 0.65));
  opacity: 0.7;
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
}

.image-text p {
  font-size: 18px;
  color: #cbd5e1;
}

/* === Responsive === */
@media (max-width: 768px) {
  .register-page {
    flex-direction: column;
  }
  .register-form-side {
    width: 100%;
    padding: 32px 24px;
  }
  .register-image-side {
    display: none;
  }
}
</style>
