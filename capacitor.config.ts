import type { CapacitorConfig } from '@capacitor/cli';

// اپ بازی با origin محلی (https://localhost) اجرا می‌شه و به سرور بریمو
// وصل می‌شه. آدرس سرور داخل خودِ game.html (API_BASE) تنظیم شده و
// originهای localhost در CORS سرور (game-api.php و api.php) مجاز هستن.
const config: CapacitorConfig = {
  appId: 'com.berimoo.game',
  appName: 'بریمو لودو',
  webDir: 'www',
  plugins: {
    SplashScreen: { launchShowDuration: 900, backgroundColor: '#0C0B09', showSpinner: false }
  },
  android: { allowMixedContent: false }
};

export default config;
