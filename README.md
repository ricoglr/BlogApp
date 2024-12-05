
# Blog Uygulaması

Bu proje, React Native kullanılarak geliştirilmiş bir blog uygulamasıdır. Kullanıcılar, blog yazıları oluşturabilir, düzenleyebilir ve silebilir. Proje, state yönetimi, API ile veri alışverişi ve backend bağlantısı gibi temel konuları kapsar.

## Teknolojiler

- **Expo**: Hızlı ve kolay geliştirilmesi için kullanılan bir framework
- **Context API ve useReducer**: State yönetimi
- **Ngrok**: Lokal sunucuyu internet üzerinden yayınlama
- **JSON Server**: Basit bir RESTful API simülasyonu
- **Axios**: HTTP isteklerini yönetme

---

## Kurulum ve Çalıştırma

Projeyi çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

### 1. Projeyi Klonlayın
```bash
git clone https://github.com/kullaniciadi/blog-uygulamasi.git
cd blog-uygulamasi
```

### 2. Bağımlılıkları Yükleyin
Node.js kurulu değilse [Node.js](https://nodejs.org/) yükleyin ve ardından aşağıdaki komutu çalıştırın:  
```bash
npm install
```

### 3. JSON Server Kurulumu
Eğer JSON Server sisteminizde kurulu değilse şu komutla yükleyin:
```bash
npm install -g json-server
```

#### JSON Server'ı Başlatma
Proje dizininde aşağıdaki komutu çalıştırarak `db.json` dosyasını backend olarak kullanabilirsiniz:
```bash
json-server --watch db.json --port 5000
```

- Bu komut, `http://localhost:5000` adresinde bir API sunucusu başlatır.

### 4. Ngrok Kullanımı
Ngrok kullanarak JSON Server'ı internet üzerinden erişilebilir hale getirmek için şu adımları izleyin:

1. Ngrok'u yükleyin:  
   [Ngrok](https://ngrok.com/) adresinden uygulamayı indirip kurun.

2. JSON Server portunu yayınlayın:  
   ```bash
   ngrok http 5000
   ```

3. Ngrok tarafından oluşturulan URL'yi (örneğin: `https://abcd1234.ngrok.io`) not alın ve bu URL'yi projenizdeki backend bağlantısı için kullanın (örneğin, `axios` çağrılarında).

### 5. Uygulamayı Başlatma
React Native uygulamanızı çalıştırmak için aşağıdaki komutu kullanabilirsiniz:
```bash
npm start
```

Android veya iOS cihazda uygulamayı test etmek için:
- **Android**:  
  ```bash
  npm run android
  ```
- **iOS** (MacOS gereklidir):  
  ```bash
  npm run ios
  ```
