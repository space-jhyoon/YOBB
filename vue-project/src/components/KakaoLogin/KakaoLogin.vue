<template>
    <div>
        <a id="custom-login-btn" @click="kakaoLogin()">
            <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222" />
        </a>
    </div>
</template>

<script>
export default {
    methods: {
        kakaoLogin(){
            console.log(window.Kakao)
            // window.Kakao.Auth.login({
            //     scope : 'profile_nickname',
            //     success : this.getKakaoAccount,
            // });
            window.Kakao.Auth.authorize({
                scope: 'profile_nickname,profile_image',
                redirectUri: 'http://localhost:8080/login',
                success: this.getKakaoAccount
            });
        },
        getKakaoAccount() {
            window.Kakao.API.request({
                url:'/v2/user/me',
                success : res => {
                    const kakao_account = res.profile_nickname;
                    // const nickname = kakao_account.profile.nickname;
                    console.log('kakao_account', kakao_account);

                    alert("로그인 성공!");
                },
                fail: error => {
                    console.log(error);
                }
            })
        },
        kakaoLogout() {
            window.Kakao.Auth.logout((response) => {
                console.log(response);
            })
        }
    }
}
</script>