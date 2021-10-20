<template>
  <div id="login">
    <h1>로그인</h1>
    <div class="input-box" >
      <input 
        type="text"
        autocomplete="off"
        v-model="username"
        @change="validateUsername()"
        required />
      <span>username</span>
    </div>
    <div class="input-box">
      <input
        type="password"
        autocomplete="off"
        v-model="password"
        required />
      <span>password</span>
    </div>
    <span class="error-message">
      {{ errorMessage }}
    </span>
    <div class="submit-box">
      <button type="submit">
        <span>Login</span>
      </button>
    </div>
    <div class="etc">
      <router-link to="/account/register">Register</router-link> | 
      <router-link to="/account/reset-password">Forgot your password?</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    login() {
      this.errorMessage="사용자명을 입력해주세요."
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  position: relative;
  width: 400px;
  height: auto;
  margin: auto;
  margin-top: 100px;
  padding: 50px;
  border: 1px solid rgba(235, 235, 235, 1); // login 박스 테두리
  box-shadow: 1px 1px 1px 1px rgba(235, 235, 235, 1);
  font-size: 15px; // 기본 폰트 사이즈
  
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
      top: 42%;
      pointer-events: none; // placeholder가 클릭되지 않도록 합니다.
      color: rgba(0,0,0, 0.45);
    }
  }

  .error-message {
    color: var(--error-color);
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