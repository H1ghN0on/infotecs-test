import React from "react";

function App() {
  return (
    <div>
      <header>
        <div className="logo">ToDo</div>
      </header>

      <aside>
        <div className="aside__item search">
          <input placeholder="Поиск..." type="text" className="search__input" />
        </div>
        <div className="aside__item add">+ Добавить</div>
        <div className="aside__item note active done">Dashboard</div>
        <div className="aside__item note pending">Dashboard</div>
        <div className="aside__item note waiting">Dashboard</div>
        <div className="aside__item note done">Dashboard</div>
      </aside>

      <main className="page-wrapper">
        <div className="note">
          <div className="note__avatar">
            <img src="/chiaki.jpg" alt="" />
          </div>
          <div className="note__name">Win the shogun raiden battle</div>
          <div className="note__text">
            I will crush Ei and her doll. I will abolish the vision hunt decree
          </div>
          <div className="note__status-list">
            <div className="note__status-btn waiting">Ожидает</div>
            <div className="note__status-btn pending">В процессе</div>
            <div className="note__status-btn active done">Выполнено</div>
          </div>
          <div className="note__danger-zone">
            <div className="note__danger-btn remove">Удалить</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
