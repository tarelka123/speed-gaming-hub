import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      // Navigation and common
      home: 'Home',
      games: 'Games',
      news: 'News',
      screenshots: 'Screenshots',
      videos: 'Videos',
      racing_game: 'Racing Game',
      login: 'Login',
      register: 'Register',
      logout: 'Logout',
      profile: 'Profile',
      
      // Games page
      games_description: 'Explore our wide collection of games and join communities with active players',
      joining: 'Joining',
      preparing_game_server: 'Preparing game server',
      
      // Home page
      hero_subtitle: 'No Limits, Just Victory. The ultimate gaming community.',
      explore_games: 'Explore Games',
      join_community: 'Join Community',
      featured_games: 'Featured Games',
      latest_news: 'Latest News',
      view_all: 'View All',
      active_players: 'Active Players',
      join: 'Join',
      
      // News
      news_title_placeholder: 'Latest Gaming Update',
      news_date_placeholder: 'June 15, 2024',
      news_excerpt_placeholder: 'Check out the latest updates and features coming to your favorite games.',
      like: 'Like',
      dislike: 'Dislike',
      
      // Screenshots & Videos
      upload: 'Upload',
      comments: 'Comments',
      
      // Auth
      email: 'Email',
      password: 'Password',
      confirm_password: 'Confirm Password',
      forgot_password: 'Forgot Password?',
      sign_up: 'Sign Up',
      already_have_account: 'Already have an account?',
      dont_have_account: "Don't have an account?",
      
      // Language selector
      language_selector: 'Language',
      language_changed: 'Language Changed',
      language_coming_soon: 'Additional languages coming soon!',
      
      // Like/Dislike
      login_required: 'Login Required',
      login_to_like: 'Please log in to like this content',
      login_to_dislike: 'Please log in to dislike this content',
      logout_successful: 'Logout Successful',
      you_have_been_logged_out: 'You have been logged out',
      
      // Racing Game
      racing_game_description: 'Test your reflexes in this fast-paced racing challenge!',
      start_game: 'Start Game',
      end_game: 'End Game',
      use_arrow_keys: 'Use left and right arrow keys to control your car',
      game_over: 'Game Over',
      your_score: 'Your Score',
      play_again: 'Play Again',
      score: 'Score',
      
      // Footer
      all_rights_reserved: 'All Rights Reserved',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      contact: 'Contact Us',
      
      // Profile
      manage_your_account: 'Manage your account settings and preferences',
      account_stats: 'Account Statistics',
      uploads: 'Uploads',
      likes_received: 'Likes Received'
    }
  },
  ru: {
    translation: {
      // Navigation and common
      home: 'Главная',
      games: 'Игры',
      news: 'Новости',
      screenshots: 'Скриншоты',
      videos: 'Видео',
      racing_game: 'Гоночная Игра',
      login: 'Войти',
      register: 'Регистрация',
      logout: 'Выйти',
      profile: 'Профиль',
      
      // Home page
      hero_subtitle: 'Без Границ, Только Победа. Лучшее игровое сообщество.',
      explore_games: 'Исследовать Игры',
      join_community: 'Присоединиться',
      featured_games: 'Популярные Игры',
      latest_news: 'Последние Новости',
      view_all: 'Смотреть Все',
      active_players: 'Игроков',
      join: 'Играть',
      
      // News
      news_title_placeholder: 'Последнее Обновление',
      news_date_placeholder: '15 июня 2024',
      news_excerpt_placeholder: 'Ознакомьтесь с последними обновлениями и функциями, которые появятся в ваших любимых играх.',
      like: 'Нравится',
      dislike: 'Не нравится',
      
      // Screenshots & Videos
      upload: 'Загрузить',
      comments: 'Комментарии',
      
      // Auth
      email: 'Эл. почта',
      password: 'Пароль',
      confirm_password: 'Подтвердите пароль',
      forgot_password: 'Забыли пароль?',
      sign_up: 'Зарегистрироваться',
      already_have_account: 'Уже есть аккаунт?',
      dont_have_account: "Еще нет аккаунта?",
      
      // Language selector
      language_selector: 'Язык',
      language_changed: 'Язык Изменен',
      language_coming_soon: 'Дополнительные языки скоро появятся!',
      
      // Like/Dislike
      login_required: 'Требуется Авторизация',
      login_to_like: 'Пожалуйста, войдите, чтобы поставить лайк',
      login_to_dislike: 'Пожалуйста, войдите, чтобы поставить дизлайк',
      logout_successful: 'Выход Выполнен',
      you_have_been_logged_out: 'Вы вышли из системы',
      
      // Racing Game
      racing_game_description: 'Проверьте свою реакцию в этой быстрой гоночной игре!',
      start_game: 'Начать Игру',
      end_game: 'Закончить Игру',
      use_arrow_keys: 'Используйте стрелки влево и вправо для управления автомобилем',
      game_over: 'Игра Окончена',
      your_score: 'Ваш Счет',
      play_again: 'Играть Снова',
      score: 'Счет',
      
      // Footer
      all_rights_reserved: 'Все права защищены',
      terms: 'Условия использования',
      privacy: 'Политика конфиденциальности',
      contact: 'Связаться с нами',
      
      // Profile
      manage_your_account: 'Управляйте настройками и предпочтениями вашего аккаунта',
      account_stats: 'Статистика Аккаунта',
      uploads: 'Загрузки',
      likes_received: 'Полученные лайки'
    }
  },
  de: {
    translation: {
      // Navigation and common
      home: 'Startseite',
      games: 'Spiele',
      news: 'Neuigkeiten',
      screenshots: 'Screenshots',
      videos: 'Videos',
      racing_game: 'Rennspiel',
      login: 'Anmelden',
      register: 'Registrieren',
      logout: 'Abmelden',
      profile: 'Profil',
      
      // Home page
      hero_subtitle: 'Keine Grenzen, nur Sieg. Die ultimative Gaming-Community.',
      explore_games: 'Spiele erkunden',
      join_community: 'Community beitreten',
      featured_games: 'Empfohlene Spiele',
      latest_news: 'Neueste Nachrichten',
      view_all: 'Alle anzeigen',
      active_players: 'Aktive Spieler',
      join: 'Beitreten',
      
      // Auth
      email: 'E-Mail',
      password: 'Passwort',
      confirm_password: 'Passwort bestätigen',
      forgot_password: 'Passwort vergessen?',
      sign_up: 'Registrieren',
      already_have_account: 'Bereits ein Konto?',
      dont_have_account: "Noch kein Konto?",
      
      // Language selector
      language_selector: 'Sprache',
      language_changed: 'Sprache geändert',
      
      // Racing Game
      racing_game_description: 'Teste deine Reflexe in dieser schnellen Rennherausforderung!',
      start_game: 'Spiel starten',
      end_game: 'Spiel beenden',
      use_arrow_keys: 'Verwende die Pfeiltasten links und rechts, um dein Auto zu steuern',
      game_over: 'Spiel vorbei',
      your_score: 'Deine Punktzahl',
      play_again: 'Nochmal spielen',
      score: 'Punktzahl',
      
      // Footer
      all_rights_reserved: 'Alle Rechte vorbehalten',
      terms: 'Nutzungsbedingungen',
      privacy: 'Datenschutz',
      contact: 'Kontakt'
    }
  },
  fr: {
    translation: {
      // Navigation and common
      home: 'Accueil',
      games: 'Jeux',
      news: 'Actualités',
      screenshots: 'Captures d\'écran',
      videos: 'Vidéos',
      racing_game: 'Jeu de Course',
      login: 'Connexion',
      register: 'Inscription',
      logout: 'Déconnexion',
      profile: 'Profil',
      
      // Language selector
      language_selector: 'Langue',
      language_changed: 'Langue modifiée',
      
      // Racing Game
      racing_game_description: 'Testez vos réflexes dans ce défi de course rapide!',
      start_game: 'Commencer le jeu',
      end_game: 'Terminer le jeu',
      use_arrow_keys: 'Utilisez les flèches gauche et droite pour contrôler votre voiture',
      game_over: 'Partie terminée',
      your_score: 'Votre score',
      play_again: 'Rejouer',
      score: 'Score',
      
      // Footer
      all_rights_reserved: 'Tous droits réservés',
      terms: 'Conditions d\'utilisation',
      privacy: 'Politique de confidentialité',
      contact: 'Contactez-nous'
    }
  },
  es: {
    translation: {
      // Navigation and common
      home: 'Inicio',
      games: 'Juegos',
      news: 'Noticias',
      screenshots: 'Capturas',
      videos: 'Vídeos',
      racing_game: 'Juego de Carreras',
      login: 'Iniciar sesión',
      register: 'Registrarse',
      logout: 'Cerrar sesión',
      profile: 'Perfil',
      
      // Language selector
      language_selector: 'Idioma',
      language_changed: 'Idioma cambiado',
      
      // Racing Game
      racing_game_description: '¡Pon a prueba tus reflejos en este desafío de carreras rápidas!',
      start_game: 'Iniciar juego',
      end_game: 'Finalizar juego',
      use_arrow_keys: 'Usa las flechas izquierda y derecha para controlar tu auto',
      game_over: 'Juego terminado',
      your_score: 'Tu puntuación',
      play_again: 'Jugar de nuevo',
      score: 'Puntuación',
      
      // Footer
      all_rights_reserved: 'Todos los derechos reservados',
      terms: 'Términos de servicio',
      privacy: 'Política de privacidad',
      contact: 'Contacto'
    }
  },
  zh: {
    translation: {
      // Navigation and common
      home: '首页',
      games: '游戏',
      news: '新闻',
      screenshots: '截图',
      videos: '视频',
      racing_game: '赛车游戏',
      login: '登录',
      register: '注册',
      logout: '登出',
      profile: '个人资料',
      
      // Language selector
      language_selector: '语言',
      language_changed: '语言已更改',
      
      // Racing Game
      racing_game_description: '在这个快节奏的赛车挑战中测试你的反应能力！',
      start_game: '开始游戏',
      end_game: '结束游戏',
      use_arrow_keys: '使用左右箭头键控制你的车',
      game_over: '游戏结束',
      your_score: '你的得分',
      play_again: '再玩一次',
      score: '得分',
      
      // Footer
      all_rights_reserved: '版权所有',
      terms: '服务条款',
      privacy: '隐私政策',
      contact: '联系我们'
    }
  },
  ja: {
    translation: {
      // Navigation and common
      home: 'ホーム',
      games: 'ゲーム',
      news: 'ニュース',
      screenshots: 'スクリーンショット',
      videos: '動画',
      racing_game: 'レーシングゲーム',
      login: 'ログイン',
      register: '登録',
      logout: 'ログアウト',
      profile: 'プロフィール',
      
      // Language selector
      language_selector: '言語',
      language_changed: '言語が変更されました',
      
      // Racing Game
      racing_game_description: 'このスピーディーなレースチャレンジであなたの反射神経をテストしましょう！',
      start_game: 'ゲーム開始',
      end_game: 'ゲーム終了',
      use_arrow_keys: '左右の矢印キーを使って車をコントロールします',
      game_over: 'ゲームオーバー',
      your_score: 'あなたのスコア',
      play_again: 'もう一度プレイ',
      score: 'スコア',
      
      // Footer
      all_rights_reserved: '全著作権所有',
      terms: '利用規約',
      privacy: 'プライバシーポリシー',
      contact: 'お問い合わせ'
    }
  },
  ko: {
    translation: {
      // Navigation and common
      home: '홈',
      games: '게임',
      news: '뉴스',
      screenshots: '스크린샷',
      videos: '비디오',
      racing_game: '레이싱 게임',
      login: '로그인',
      register: '회원가입',
      logout: '로그아웃',
      profile: '프로필',
      
      // Language selector
      language_selector: '언어',
      language_changed: '언어가 변경되었습니다',
      
      // Racing Game
      racing_game_description: '이 빠른 레이싱 도전에서 당신의 반사 신경을 시험해보세요!',
      start_game: '게임 시작',
      end_game: '게임 종료',
      use_arrow_keys: '왼쪽과 오른쪽 화살표 키를 사용하여 자동차를 조종하세요',
      game_over: '게임 오버',
      your_score: '당신의 점수',
      play_again: '다시 하기',
      score: '점수',
      
      // Footer
      all_rights_reserved: '모든 권리 보유',
      terms: '이용약관',
      privacy: '개인정보 보호정책',
      contact: '문의하기'
    }
  },
  ar: {
    translation: {
      // Navigation and common
      home: 'الرئيسية',
      games: 'الألعاب',
      news: 'الأخبار',
      screenshots: 'لقطات الشاشة',
      videos: 'الفيديوهات',
      racing_game: 'لعبة السباق',
      login: 'تسجيل الدخول',
      register: 'التسجيل',
      logout: 'تسجيل الخروج',
      profile: 'الملف الشخصي',
      
      // Language selector
      language_selector: 'اللغة',
      language_changed: 'تم تغيير اللغة',
      
      // Racing Game
      racing_game_description: 'اختبر ردود فعلك في تحدي السباق السريع هذا!',
      start_game: 'ابدأ اللعبة',
      end_game: 'إنهاء اللعبة',
      use_arrow_keys: 'استخدم مفاتيح الأسهم اليسار واليمين للتحكم في سيارتك',
      game_over: 'انتهت اللعبة',
      your_score: 'النتيجة الخاصة بك',
      play_again: 'العب مرة أخرى',
      score: 'النتيجة',
      
      // Footer
      all_rights_reserved: 'جميع الحقوق محفوظة',
      terms: 'شروط الخدمة',
      privacy: 'سياسة الخصوصية',
      contact: 'اتصل بنا'
    }
  }
};

// Initialize i18n before export
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false // This is important for SSR and preventing issues
    }
  });

export const initI18n = () => {
  return i18n;
};

export default i18n;