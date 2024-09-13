// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  type: "service_account",
  project_id: "coffee-leaf-vku",
  private_key_id: "f1e4cdf36e614a30a5d359608424594f3c41f007",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCf22odrsyzirEa\nYsmI5c9/8Cdfj6Mq16PIXpq8XDz899mRszyAlt9bPpFX4dYauBKU2Nz9MzVFuzzx\nlTZhxSuXIoDjaAyNM9+hj4cSCz1nbQniqczTKS3a8auMkWq5P1m+16qWJ1AKVccC\njfvPWkbE/JYs+71jWyIuEsC2WZshHfjInBsPJgkV73yvEe8q5KsWokWyeRjKoGDc\nU2lX/b8tNahY1Dzu244kfNpSIpELvMYWLNptk8B43IEijWDvidnrF8lvS7ZzZUY+\n4altgOZTugMXsfQTzkZ1l9vCo1kNZ9FPRkC9KcDhgWMaLfPxT5Zo7xJirGsNlpKL\n4DcMPfYjAgMBAAECggEAN6wKgNvnnn+mvjG5Tlv6r+vLSpSTltAS0i1gZkkZVGBc\n/UkWwRHKJ9TaeWjFT/jbP8tm6ydyXh6fUuNMVTB9xdzWVlxeQq7WK0X5HGedsu9e\nifnow4GL3rxbqlDagjl13+jsF+8JCRBmhpU8JTKjgucUxgXGJ1wNw030n40FYbqp\nPWWyGXHzECUPbn2e7CXKCaOPgB7fKOeLMPpO82XVo1eI2DCjcMkAspNFDe63u4Mk\nlBPoKiHd+LaWYwohkNMyCpI47+vXOVV99FK+WjsbxIFnbYhdbB3ssp96evcTi2vv\nlTj8fdrFC3RiI7OTaIlZi+o3FxtkQmjLZV0uD9f0AQKBgQDX7j0jP9kHgLolonYo\nVDwaKuavCHsvglCIcaZHv7Ws6P6g8APKvIZbJiVf26lccRcmebpst8vLGBCwOm8/\nie6saBdqFdvaTCy/NDUBL7/1FNqs8ijFXBnx9v1/K2XKX52FJKGWE5iYncIV4t4K\nPQJAew4tWVNXv/is8bGpZY2CQQKBgQC9hWiTJGjFnqDuYlV1ExVt17/494lzHETa\nNJjaX/eSY0sU3z3JTv8hoq7KOCiQdnQXaNjDVahIWXoU/l1tomPIO0Jf3Rtu+70R\nHbB8TrI/w4Z1p2CuWm/yUtuJyY/ETzhz0HVFGdPiS4mrhX4iRyMMpoA4vWiPmqNl\nISElJiDXYwKBgBFux3rQDcqARwcAzb9FxbBrJEKfUaqtP6k0W7NRM+6oxN3jYrr8\na3BybPQHPO4cpzzQ+Q8L66US5U4E+bRMg3thz/odl6lRGw+4vErDOyEjNOBfkJEW\ndXXGdgLNUyN6grIcGfuOy3QO0HuJ3FlBQaxJAwUAQC1Gb2IvBSPi8gDBAoGAa/vA\nat466CaK8WiL4on+Erj0Q8newfygame/k+VMLVdv5zOPg80D50lHKCc5TZ6AZPoz\nT5DVsmtw+Nc5qob1LZg+KFrWD7VVs5PkA9/fBh/E0/KLTqxuznZRaj+zL5onwy1K\nNBYUOQLrLRSBmsxHdyTDOBELq47jfHKU7RK9cZsCgYBPS2O+YQowxzO1nUb9m0jW\nkZ6DASF+Zv6HVeYSWGIb5TPNbUSOiBmgtW8Ed4aX1S4QiJDNs8CyloGOe8RCM6tA\n5A0Fv+m+f+RhAmcpmelXaoVZWRfdMreaGAhlr19X0QSi3fTe07oID15IzaKi6MfG\nI/qvvNTI50r7dzW8zoFtjQ==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-qorzj@coffee-leaf-vku.iam.gserviceaccount.com",
  client_id: "102277068106033444471",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qorzj%40coffee-leaf-vku.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
  storageBucket: "gs://coffee-leaf-vku.appspot.com"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };