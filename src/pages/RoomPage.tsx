const RoomPage = ({ setRoom, setIsAuth }) => {
  // Form gönderilince tetiklenicek
  const handleSubmit = (e) => {
    e.preventDefault();

    // Inputtaki değeri al
    const room = e.target[0].value;

    // Kullanıcının seçtiği odayı state'e aktar.
    setRoom(room.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>

      <p>Which chat room would you like to enter?</p>

      <input type="text" placeholder="ör:haftaiçi" required />

      <button type="submit">Enter the Room</button>
      <button
        onClick={() => {
          // Yetki state'ini false'a çekerek login'e yönlendir
          setIsAuth(false);
          // Local'deki kaydı kaldır
          localStorage.removeItem('token');
        }}
        type="button"
      >
        Sign out
      </button>
    </form>
  );
};

export default RoomPage;
