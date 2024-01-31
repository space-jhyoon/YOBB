/* __placeholder__ */
methods: {
                kakaoLogin(); {
                        window.kakao.Auth.login({
                        scope: 'profile, account_email',
                        success: this.getKakaoAccount,
                        });
                },
                getKakaoAccount(); {
                        window.Kakao.API.request({
                                url: '/v2/user/me',
                                success: res => {
                                const kakao_account = res.kakao_account;
                                const nickname = kakao_account.profile.nickname;
                                console.log('nickname', nickname);

                                alert("로그인 성공!");
                                },
                                fail: error => {
                                console.log(error);
                                }
                        })
                }
        }