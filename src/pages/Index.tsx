import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Стильная куртка",
      price: "12 990 ₽",
      image: "/img/7fb1cdbe-a02d-4e4f-894e-44ea3d754f41.jpg",
      category: "Верхняя одежда",
    },
    {
      id: 2,
      name: "Классические джинсы",
      price: "5 990 ₽",
      image: "/img/7fb1cdbe-a02d-4e4f-894e-44ea3d754f41.jpg",
      category: "Джинсы",
    },
    {
      id: 3,
      name: "Кожаные ботинки",
      price: "15 990 ₽",
      image: "/img/7fb1cdbe-a02d-4e4f-894e-44ea3d754f41.jpg",
      category: "Обувь",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Тренды моды 2025",
      excerpt: "Разбираем главные тенденции наступающего сезона",
      image: "/img/19269afe-bdb6-4649-acbf-699f9118776f.jpg",
      date: "12 января 2025",
      comments: 23,
    },
    {
      id: 2,
      title: "Как подобрать идеальный гардероб",
      excerpt: "Советы стилистов для создания базового гардероба",
      image: "/img/19269afe-bdb6-4649-acbf-699f9118776f.jpg",
      date: "8 января 2025",
      comments: 15,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-gray-900">
                Fashion Store
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#catalog"
                  className="text-gray-600 hover:text-[#E11D48] transition-colors"
                >
                  Каталог
                </a>
                <a
                  href="#blog"
                  className="text-gray-600 hover:text-[#E11D48] transition-colors"
                >
                  Блог
                </a>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-[#E11D48] transition-colors"
                >
                  О компании
                </a>
                <a
                  href="#contacts"
                  className="text-gray-600 hover:text-[#E11D48] transition-colors"
                >
                  Контакты
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Icon
                  name="Search"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <Input placeholder="Поиск товаров..." className="pl-10 w-64" />
              </div>
              <Button variant="ghost" size="sm">
                <Icon name="Heart" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="ShoppingCart" size={20} />
                <Badge className="ml-1 bg-[#E11D48] text-white">3</Badge>
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Модная одежда <br />
            <span className="text-[#E11D48]">нового поколения</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Откройте для себя коллекцию стильной одежды, созданной для
            современных людей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#E11D48] hover:bg-[#BE185D] text-white px-8"
            >
              Смотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#E11D48] text-[#E11D48] hover:bg-[#E11D48] hover:text-white"
            >
              О компании
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Популярные товары
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Откройте для себя нашу коллекцию самых востребованных товаров
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm hover:shadow-xl"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#E11D48] text-white">
                    {product.category}
                  </Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                  >
                    <Icon name="Heart" size={16} />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h4>
                  <p className="text-2xl font-bold text-[#E11D48] mb-4">
                    {product.price}
                  </p>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-[#E11D48] hover:bg-[#BE185D] text-white">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />В
                      корзину
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Eye" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-[#E11D48] text-[#E11D48] hover:bg-[#E11D48] hover:text-white"
            >
              Показать больше товаров
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Модный блог
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Последние новости моды, тренды и советы от наших экспертов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm hover:shadow-xl bg-white"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="MessageCircle" size={14} />
                      {post.comments} комментариев
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#E11D48] transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-[#E11D48] hover:bg-[#E11D48] hover:text-white p-0"
                  >
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-[#E11D48] text-[#E11D48] hover:bg-[#E11D48] hover:text-white"
            >
              Все статьи блога
            </Button>
          </div>
        </div>
      </section>

      {/* RoboKassa Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#E11D48] to-[#BE185D] rounded-2xl p-12 text-center text-white">
            <h3 className="text-4xl font-bold mb-4">Безопасные платежи</h3>
            <p className="text-xl mb-8 opacity-90">
              Мы принимаем все виды платежей через RoboKassa
            </p>
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <Icon name="CreditCard" size={24} />
                <span>Банковские карты</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Smartphone" size={24} />
                <span>Мобильные платежи</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={24} />
                <span>100% безопасно</span>
              </div>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[#E11D48] hover:bg-gray-100"
            >
              Узнать больше о платежах
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Fashion Store</h4>
              <p className="text-gray-400 mb-4">
                Современная мода для стильных людей
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Женская одежда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Мужская одежда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Обувь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Аксессуары
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Личный кабинет</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Вход
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Регистрация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Мои заказы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Избранное
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Fashion Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
