<template>
  <div id="register">
    <h1>사용자 등록</h1>
    <div class="input-box">
      <input 
        type="text"
        autocomplete="off"
        v-model="username"
        @change="validateUsername"
        required />
      <span>username</span>
    </div>
    <span class="comment">* 영문, 숫자, 마침표를 사용할 수 있습니다.</span>
    <span class="comment">* 첫 문자 및 마지막 문자에는 마침표를 사용할 수 없습니다.</span>
    <span class="comment">* 최소 6글자 이상, 최대 30글자 이하를 사용하세요.</span>
    <div class="input-box">
      <input 
        type="password"
        autocomplete="off"
        v-model="password"
        @change="validatePassword"
        required />
      <span>password</span>
    </div>
    <span class="comment">* 문자, 숫자, 기호를 각 1개 이상 사용하세요.</span>
    <span class="comment">* 최소 8글자 이상, 최대 30글자 이하를 사용하세요.</span>
    <div class="input-box">
      <input 
        type="password"
        autocomplete="off"
        v-model="passwordConfirm"
        @change="validatePasswordConfirm"
        required />
      <span>password-confirm</span>
    </div>
    <span class="comment">* 비밀번호를 확인하세요.</span>
    <div class="input-box">
      <input 
        type="text"
        autocomplete="off"
        v-model="email"
        @change="validateEmail"
        required />
      <span>email</span>
    </div>
    <span class="comment">* 본인인증이 가능한 이메일 주소를 작성하세요.</span>
    <span class="comment">* 이메일 형식으로 작성하세요. (e.g. xxx@yyy.zz)</span>
    <div class="submit-box">
      <button type="submit">
        <span>Register</span>
      </button>
    </div>
    <div class="etc">
      <router-link to="/account/login">Go to Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      username: '',
      password: '',
      passwordConfirm: '',
      email: ''
    }
  },
  methods: {
    validateUsername(event) {
      var usernameRegex = new RegExp("^[a-zA-Z0-9][a-zA-Z0-9.]{4,28}[a-zA-Z0-9]$");
      // [a-zA-Z] : 처음글자는 문자를 사용합니다.
      // [a-zA-Z0-9.] : 문자, 숫자, .(닷 기호) 를 사용하여 5글자 이상을 사용합니다.
      // {5,29} : 최소 6자 이상, 최대 30자 이하의 사용자명을 사용합니다. (첫 문자 + 이후 문자 )
      if(usernameRegex.test(this.username)) {
        event.target.parentNode.classList.replace('invalid','valid');
        event.target.parentNode.classList.add('valid');
      } else {
        event.target.parentNode.classList.replace('valid','invalid');
        event.target.parentNode.classList.add('invalid');
      }
    },
    validatePassword(event) {
      var passwordRegex = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,30})");
      // (?=.*[a-zA-Z]) : 소문자 혹은 대문자 를 1개 이상 사용합니다.
      // (?=.*[0-9]) : 숫자를 1개 이상 사용합니다.
      // (?=.*[!@#$%^&*]) : 특수기호를 1개 이상 사용합니다.
      // (?=.{8,30}) : 최소 8자 이상, 최대 30글자 이하의 암호를 사용합니다.
      if(passwordRegex.test(this.password)) {
        event.target.parentNode.classList.replace('invalid','valid');
        event.target.parentNode.classList.add('valid');
      } else {
        event.target.parentNode.classList.replace('valid','invalid');
        event.target.parentNode.classList.add('invalid');
      }
    },
    validatePasswordConfirm(event) {
      if(this.password === this.passwordConfirm) {
        event.target.parentNode.classList.replace('invalid','valid');
        event.target.parentNode.classList.add('valid');
      } else {
        event.target.parentNode.classList.replace('valid','invalid');
        event.target.parentNode.classList.add('invalid');
      }
    },
    validateEmail(event) {
      var emailRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$");
      if(emailRegex.test(this.email)) {
        event.target.parentNode.classList.replace('invalid','valid');
        event.target.parentNode.classList.add('valid');
      } else {
        event.target.parentNode.classList.replace('valid','invalid');
        event.target.parentNode.classList.add('invalid');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#register {
  position: relative;
  width: 400px;
  height: auto;
  margin: auto;
  margin-top: 100px;
  padding: 50px;
  border: 1px solid rgba(235, 235, 235, 1); // login 박스 테두리
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px rgba(235, 235, 235, 1);
  font-size: 15px; // 기본 폰트 사이즈
  
  span {
    &.comment {
      display: block;
      padding-top: 5px;
      padding-left: 8px;
      text-align: left;
      font-size: 12px;
    }
  }

  .input-box {
    position: relative;
    padding-top: 10px; // input-box 사이 간격을 표현

    @mixin input-span-style { // 데이터 입력 시 입력 타이틀을 상단에 고정
      left: 5px;
      top: 8%;
      padding-left: 2px;
      padding-right: 2px;
      background: rgba(255, 255, 255, 1);
      font-size: 12px;
    }

    input {
      box-sizing: border-box; // margin, padding, border 사이즈를 전부 합쳐서 width 100%
      width: 100%;
      height: 50px;
      padding-left: 15px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 2px;
      outline: none;
      background-color: transparent;
      font-size: 15px; // 기본 폰트 사이즈
      &:focus { // 데이터 입력 시 input 태그의 동작
        border: 2px solid rgba(0, 125, 171, 1);
      }
      &:focus + span { // 데이터 입력 시 span 태그의 동작
        @include input-span-style;
        color: rgba(0, 125, 171, 1);
        transition-property: top, left, font-size;
        transition-duration: 0.3s;
      }
      &:valid + span { // 데이터가 입력되었을 때 span 태그의 동작
        @include input-span-style;
      }
    }

    span {
      position: absolute;
      left: 13px;
      top: 45%;
      pointer-events: none; // placeholder가 클릭되지 않도록 합니다.
      color: rgba(0,0,0, 0.45);
    }

    &.invalid { // invalidate되었을 때의 효과
      input {
        border: 1.5px solid var(--error-color);
        &:valid + span { // 데이터가 입력되었을 때 span 태그의 효과
          color: var(--error-color);  
        }
        &:focus {
          border: 2px solid rgba(0, 125, 171, 1);
        }
        &:focus + span {
          @include input-span-style;
          color: rgba(0, 125, 171, 1);
          transition-property: top, left, font-size;
          transition-duration: 0.3s;
        }
      }
    }
  }
  
  .submit-box {
    button {
      display: inline-block;
      vertical-align: middle;
      width: 100%;
      height: 50px;
      line-height: 50px;
      margin-top: 20px;
      border: none;
      border-radius: 3px;
      background-color: var(--box-color);
      color: rgba(235, 235, 235, 1);
      text-decoration: none;
      cursor: pointer;
      &:hover {
        background-color: var(--box-hover-color);
        text-decoration: none;
      }
      span {
        font-size: 16px;
        color: rgba(235, 235, 235, 1);
      }
    }
  }

  .etc {
    padding-top: 20px;
    padding-left: 5px;
    font-size: 15px;
    text-align: left;
    a {
      &:link {
        color: rgba(0, 0, 0, 1);
        text-decoration: none;
      }
      &:visited {
        color: rgba(0, 0, 0, 1);
        text-decoration: none;
      }
    }
  }
} 
</style>