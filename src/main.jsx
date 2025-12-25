/* --- Импорт стилей --- */
import './styles/normalize.css'; // ✅ 1 - подключение CSS-библиотеки для нормализации стилей
import './styles/reset.css'; // ✅ 2 - подключение CSS-библиотеки для сброса стилей поверх normalize.css
import './styles/variables.css'; // ✅ 3 - подключение CSS-переменных
import './index.css'; // ✅ 4 - глобальные CSS-стили приложения

/* --- Импорт функциональных модулей React --- */
import { createRoot } from 'react-dom/client'; // ✅ функция для создания корня приложения и рендеринга компонентов
import { StrictMode } from 'react'; // ✅ инструмент React для проверки ошибок в разработке

/* --- Импорт главного компонента --- */
import { App } from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
