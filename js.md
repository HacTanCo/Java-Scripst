# Giới thiệu
JavaScript là một ngôn ngữ lập trình được sử dụng phổ biến cho phát triển web. Nó được tạo ra bởi Brendan Eich vào năm 1995, khi ông đang làm việc tại Netscape Communications Corporation. 

JavaScript là một ngôn ngữ động, mức cao, có khả năng xử lý các sự kiện và tương tác với trang web. JavaScript có thể được sử dụng để tạo ra các ứng dụng web động, các trò chơi trực tuyến, các ứng dụng di động và các ứng dụng máy tính để bàn. Nó là một phần của triển khai trên trình duyệt, có thể được sử dụng trên các nền tảng khác nhau và là một trong những ngôn ngữ lập trình phổ biến nhất hiện nay.

Ban đầu, nó được thiết kế như một ngôn ngữ kịch bản cho các trang web và được đặt tên là Mocha, sau đó là LiveScript, trước khi cuối cùng được đổi tên thành JavaScript.

Ngôn ngữ này ban đầu được phát triển cho trình duyệt Netscape Navigator và trở thành một phần của triển khai của trình duyệt. Tuy nhiên, khi Microsoft phát triển Internet Explorer và bao gồm JavaScript trong trình duyệt của mình, sự cạnh tranh giữa hai trình duyệt đã dẫn đến một số vấn đề tương thích.

Trong những năm tiếp theo, JavaScript đã được cải tiến và phát triển để hỗ trợ các tính năng phức tạp hơn như AJAX và các framework như jQuery, Angular và React. JavaScript cũng được sử dụng rộng rãi trong phát triển ứng dụng di động và desktop thông qua các công cụ như Electron.

Hiện nay, JavaScript là một trong những ngôn ngữ lập trình phổ biến nhất trên thế giới và được sử dụng trong hầu hết các trang web và ứng dụng web.

JavaScript đã có nhiều phiên bản khác nhau trong quá trình phát triển của nó. Dưới đây là một số phiên bản chính của JavaScript:

- _ECMAScript 1 (ES1):_ Phiên bản đầu tiên của JavaScript được công bố bởi ECMA International vào năm 1997.

- _ECMAScript 2 (ES2):_ Phiên bản này được công bố vào năm 1998 và chỉ bổ sung một số tính năng nhỏ so với ES1.

- _ECMAScript 3 (ES3):_ Được công bố vào năm 1999, phiên bản này đã có nhiều cải tiến và tính năng mới, bao gồm cơ chế xử lý lỗi try-catch, đối tượng JSON và hỗ trợ cho các đối tượng RegExp.

- _ECMAScript 4 (ES4):_ Phiên bản này đã được đề xuất nhưng không bao giờ được triển khai vì sự tranh cãi quanh các tính năng mới được đề xuất.

- _ECMAScript 5 (ES5):_ Được công bố vào năm 2009, phiên bản này đã bổ sung các tính năng mới như đối tượng JSON, phương thức Array.forEach và phương thức Object.keys.

- _ECMAScript 6 (ES6)_ hoặc _ES2015_: Được công bố vào năm 2015, phiên bản này đã bổ sung nhiều tính năng mới như khai báo biến let và const, phương thức arrow function, các template strings và các lớp.

- _ECMAScript 7 (ES7)_ hoặc _ES2016_: Được công bố vào năm 2016, phiên bản này đã bổ sung các tính năng mới như phương thức Array.prototype.includes() và phương thức Exponentiation.

- _ECMAScript 8 (ES8)_ hoặc _ES2017_: Được công bố vào năm 2017, phiên bản này đã bổ sung các tính năng mới như async/await, Object.entries và Object.values.

Hiện nay, phiên bản mới nhất của JavaScript là _ECMAScript 2022 (ES2022)_ đã được công bố vào năm 2021, với các tính năng mới như String.prototype.replaceAll() và Promise.any().

# Tích hợp Javascript
Để tích hợp JavaScript vào trang web của bạn, bạn có thể làm theo các bước sau:

- Tạo một tập tin JavaScript. Bạn có thể tạo một tập tin văn bản đơn giản với phần mở rộng là ".js", ví dụ: script.js. Trong tập tin JavaScript, bạn có thể bắt đầu viết mã JavaScript của mình.

- Sau đó, để tích hợp mã JavaScript vào trang web của bạn, bạn cần thêm một thẻ ```<script>``` vào tài liệu HTML của mình. Thẻ ```<script>``` có thể được đặt trong phần ```<head>``` hoặc phần cuối của trang web.

Ví dụ:
```
    <!DOCTYPE html>
    <html>
    <head>
        <title>Trang web của tôi</title>
        <script src="script.js"></script>
    </head>
    <body>
        <!-- Nội dung trang web của bạn ở đây -->
    </body>
    </html>
```

Trong ví dụ này, thẻ ```<script>``` được đặt trong phần ```<head>``` và tham chiếu đến tập tin JavaScript có tên là "script.js".

Bây giờ bạn có thể viết mã JavaScript của mình trong tập tin "script.js". Mã JavaScript sẽ được thực thi khi trình duyệt của người dùng tải trang web của bạn.

Ngoài ra, để tích hợp mã JavaScript vào trang web bằng cách viết trực tiếp trong tài liệu HTML, chúng ta có thể sử dụng thẻ `<script>` và viết mã JavaScript trong thẻ đó. Thẻ `<script>` có thể được đặt trong phần <head> hoặc phần cuối của trang web.

Ví dụ:

```
    <!DOCTYPE html>
    <html>
    <head>
        <title>Trang web của tôi</title>
    </head>
    <body>
        <button onclick="alert('Xin chào, đây là mã JavaScript!')">Nhấn vào đây</button>
    </body>
    </html>
```

# Một số thành phần cơ bản của Javascript

## Khai báo biến

Trong JavaScript, bạn có thể sử dụng từ khóa var, let để khai báo một biến.

- _var_ là cách khai báo biến trong JavaScript trước khi ES6 được ra mắt. Biến được khai báo bằng _var_ có phạm vi là global (toàn cục) hoặc function (hàm). Khi khai báo biến bằng _var_, bạn có thể gán giá trị cho biến trước hoặc sau khi khai báo.

Ví dụ:

```
    var x = 5; // Khai báo biến x và gán giá trị là 5
    x = 10; // Gán giá trị mới cho biến x
    console.log(x); // Kết quả: 10
```

- _let_ là cách khai báo biến trong JavaScript từ phiên bản ES6 trở đi. Biến được khai báo bằng _let_ có phạm vi là block (khối). Khi khai báo biến bằng _let_, bạn không thể gán giá trị cho biến trước khi khai báo.
Ví dụ:

```
    let x; // Khai báo biến x
    x = 5; // Gán giá trị cho biến x
    console.log(x); // Kết quả: 5
```

## Khai báo hằng
Trong JavaScript, bạn có thể sử dụng từ khóa const để khai báo một hằng số (constant).

Một hằng số trong JavaScript là một biến mà giá trị của nó không thay đổi sau khi được gán giá trị ban đầu. Khi khai báo một hằng số, bạn phải gán giá trị cho nó ngay lập tức, và sau đó không thể thay đổi giá trị đó.

Ví dụ, để khai báo một hằng số PI với giá trị bằng 3.14, bạn có thể viết như sau:

```
    const PI = 3.14;
```

Sau đó, bạn không thể thay đổi giá trị của PI:

```
    PI = 3.14159; // Lỗi: Không thể gán lại giá trị cho hằng số
```

Lưu ý rằng, việc sử dụng hằng số giúp cho code của bạn dễ đọc hơn, vì nó cho biết rằng giá trị của biến không thay đổi. Tuy nhiên, bạn nên sử dụng hằng số chỉ khi bạn thực sự cần nó, và không nên sử dụng quá nhiều hằng số trong code của mình, vì điều đó có thể làm cho code trở nên khó hiểu.


## Câu lệnh điều kiện

```
    if (condition) {
        // do something
    } else {
        // do something else
    }
```

## Vòng lặp

```
    for (let i = 0; i < 10; i++) {
        // do something
    }
    while (condition) {
        // do something
    }
```

## Hàm

Trong JavaScript, một hàm là một khối mã thực hiện một số công việc cụ thể và có thể được gọi (hoặc invoke) từ một nơi khác trong chương trình. Một hàm có thể có các tham số đầu vào và có thể trả về một giá trị.

Để định nghĩa một hàm, chúng ta sử dụng từ khóa function.

Ví dụ:
```
    function calculateSum(a, b) {
        let sum = a + b;
        return sum;
    }
```

Trong ví dụ trên, chúng ta đã định nghĩa một hàm calculateSum với hai tham số đầu vào a và b. Hàm này tính tổng của a và b và trả về giá trị đó.

Để gọi một hàm đã được định nghĩa, chúng ta chỉ cần sử dụng tên hàm và truyền vào các giá trị cho các tham số.

Ví dụ:

```
    let result = calculateSum(5, 10);
    console.log(result); // Kết quả: 15
```

Ngoài cách định nghĩa hàm thông qua từ khóa function, từ ES6, chúng ta còn có thể sử dụng cú pháp Arrow Function để định nghĩa hàm. Cú pháp này rút gọn cách viết của hàm bằng cách sử dụng dấu mũi tên (=>).

```
    const calculateSum = (a, b) => a + b;
```

Trong ví dụ này, chúng ta đã định nghĩa một hàm calculateSum sử dụng Arrow Function. Hàm này nhận hai tham số a và b, tính tổng của chúng và trả về kết quả đó.

Lưu ý rằng, khi sử dụng Arrow Function, nếu hàm chỉ có một câu lệnh return, chúng ta có thể rút gọn cách viết của nó như trên.

__Một số ví dụ:__

- __Ví dụ 1:__ Hàm tính bình phương của một số

```
    // Sử dụng function thông thường
    function square(x) {
        return x * x;
    }

    // Sử dụng Arrow Function
    const square = (x) => x * x;
```

- __Ví dụ 2:__ Hàm kiểm tra số chẵn

```
    // Sử dụng function thông thường
    function isEven(number) {
        if (number % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    // Sử dụng Arrow Function
    const isEven = (number) => (number % 2 === 0);
```

- __Ví dụ 3:__ Hàm tính tổng các số trong một mảng

```
    // Sử dụng function thông thường
    function sumArray(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    }

    // Sử dụng Arrow Function
    const sumArray = (numbers) => {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    }
```

- __Ví dụ 4:__ Hàm kiểm tra một chuỗi có chứa một ký tự cụ thể hay không

```
    // Sử dụng function thông thường
    function containsChar(str, char) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
            return true;
            }
        }
        return false;
    }

    // Sử dụng Arrow Function
    const containsChar = (str, char) => {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
            return true;
            }
        }
        return false;
    }
```

Lưu ý rằng khi sử dụng Arrow Function, nếu hàm chỉ có một tham số đầu vào, chúng ta có thể bỏ qua dấu ngoặc đơn.

Ví dụ:

```
    const square = x => x * x;
```

## Đối tượng

Trong JavaScript, đối tượng (object) là một kiểu dữ liệu đặc biệt, cho phép bạn lưu trữ và tổ chức các giá trị và hành động trong một cấu trúc dữ liệu có cấu trúc. Đối tượng trong JavaScript được tạo ra bằng cách sử dụng cú pháp object literal hoặc constructor.

- Object Literal: Cú pháp khởi tạo đối tượng bằng object literal như sau:

```
    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
```

Trong đó, person là tên của đối tượng, firstName, lastName, age, và fullName là các thuộc tính của đối tượng, và 'John', 'Doe', 30, là các giá trị của các thuộc tính đó. Bạn có thể truy cập đến các thuộc tính của đối tượng bằng cách sử dụng dấu chấm (.):

```
    console.log(person.name); // Output: "John"
    console.log(person.age); // Output: 30
    console.log(person.fullName); // Output: "John Doe"
```

- Constructor: Chúng ta cũng có thể khởi tạo đối tượng bằng cách sử dụng constructor. Cú pháp tạo đối tượng bằng constructor như sau:

```
    function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.age = age;
    this.lastName = lastName;
    }

    var person = new Person('John', 'Doe', 30);
```

## Sự kiện

Sự kiện (event) trong JavaScript là các hành động hoặc tương tác mà người dùng thực hiện trên trang web, ví dụ như nhấp chuột, nhấn phím, cuộn trang, hoặc tải trang. Các sự kiện được sử dụng để xử lý các tương tác của người dùng với trang web bằng cách kích hoạt các chức năng hoặc hành động trong JavaScript.

JavaScript cung cấp một số sự kiện tiêu chuẩn có thể được sử dụng trong các ứng dụng web, bao gồm:

- __click:__ Sự kiện xảy ra khi người dùng nhấp chuột vào một phần tử.

- __submit:__ Sự kiện xảy ra khi người dùng gửi một biểu mẫu.

- __keydown:__ Sự kiện xảy ra khi người dùng bấm một phím trên bàn phím.

- __load:__ Sự kiện xảy ra khi trang web được tải hoàn tất.

- __scroll:__ Sự kiện xảy ra khi người dùng cuộn trang web.

Và còn nhiều sự kiện khác nữa.

Để xử lý sự kiện, bạn có thể sử dụng phương thức _addEventListener()_ để gán một hàm xử lý sự kiện cho một phần tử trên trang web. Ví dụ:

```
    document.getElementById("myBtn").addEventListener("click", function(){
        // do something
    });
```

Trong ví dụ trên, chúng ta lấy phần tử có id là myBtn bằng cách sử dụng phương thức getElementById() và gán một hàm xử lý sự kiện cho sự kiện click bằng cách sử dụng phương thức addEventListener(). Khi người dùng nhấp chuột vào phần tử này, hàm xử lý sự kiện được gọi để xử lý sự kiện.


## Một số ví dụ

Dưới đây là một số ví dụ về các chức năng cơ bản của JavaScript:

- __Tính tổng của hai số:__

```
    let a = 5;
    let b = 10;
    let sum = a + b;
    console.log(sum); // Output: 15
```

- __Hiển thị thông báo:__

```
    alert("Hello World!");
```

- __Thay đổi nội dung của một phần tử HTML:__

```
    <p id="myPara">This is a paragraph.</p>
    <script>
        document.getElementById("myPara").innerHTML = "This is a new paragraph.";
    </script>
```

- __Đổi màu nền của một phần tử HTML:__

```
    <button onclick="document.body.style.backgroundColor='red'">Red</button>
    <button onclick="document.body.style.backgroundColor='green'">Green</button>
    <button onclick="document.body.style.backgroundColor='blue'">Blue</button>
```

- __Tính giá trị tuyệt đối của một số:__

```
    let a = -10;
    let absoluteValue = Math.abs(a);
    console.log(absoluteValue); // Output: 10
```

- __Lấy giá trị ngẫu nhiên từ một mảng:__

```
    let arr = ["apple", "banana", "orange"];
    let randomValue = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomValue); // Output: a random value from the array
```

- __Hiển thị ngày và giờ hiện tại:__

```
    let today = new Date();
    let dateTime = today.toLocaleString();
    console.log(dateTime); // Output: current date and time in a readable format
```

Đây chỉ là một số ví dụ đơn giản về các chức năng cơ bản của JavaScript.

# Xử lý DOM

DOM (Document Object Model) là một chuẩn web được sử dụng để mô tả cấu trúc của một trang web. JavaScript có thể được sử dụng để truy cập và thay đổi các phần tử HTML và CSS thông qua DOM.

Dưới đây là một số ví dụ về cách JavaScript xử lý DOM:

__Truy cập một phần tử HTML:__

```
let element = document.getElementById("myElement");

```

__Thay đổi nội dung của một phần tử HTML:__

```
    let element = document.getElementById("myElement");
    element.innerHTML = "New content";
```

__Thay đổi thuộc tính của một phần tử HTML:__

```
    let element = document.getElementById("myElement");
    element.setAttribute("class", "newClass");
```

__Thêm một phần tử HTML mới vào trang web:__

```
    let newElement = document.createElement("div");
    newElement.innerHTML = "New element";
    document.body.appendChild(newElement);
```
__Xóa một phần tử HTML:__

```
    let element = document.getElementById("myElement");
    element.parentNode.removeChild(element);
```
__Thực thi một hàm khi người dùng nhấp vào một phần tử HTML:__

``` 
    document.getElementById("myElement");
    element.addEventListener("click", function() {
        // do something
    });
```

__Thay đổi lớp CSS của một phần tử HTML khi người dùng thực hiện một hành động:__

```
    let element = document.getElementById("myElement");
    element.addEventListener("mouseover", function() {
        element.classList.add("highlight");
    });
    element.addEventListener("mouseout", function() {
        element.classList.remove("highlight");
    });
```

# Một số bài tập cơ bản

1. Nhập vào 2 số và hiển thị tổng, hiệu, tích, thương của 2 số đó

_Hướng dẫn:_

- __Bước 1: tạo form nhập__

```
    <form>
        <label for="num1">Number 1:</label>
        <input type="number" id="num1" name="num1"><br>

        <label for="num2">Number 2:</label>
        <input type="number" id="num2" name="num2"><br>

        <input type="button" value="Add" onclick="addNumbers()">
    </form>
```

- __Bước 2: viết hàm tính toán__

```
    function addNumbers() {
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let sum = num1 + num2;

        alert("The sum of " + num1 + " and " + num2 + " is " + sum);
    }
    function subtractNumbers() {
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let diff = num1 - num2;

        alert("The difference between " + num1 + " and " + num2 + " is " + diff);
    }
    function multiplyNumbers() {
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let product = num1 * num2;

        alert("The product of " + num1 + " and " + num2 + " is " + product);
    }
    function divideNumbers() {
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let quotient = num1 / num2;

        alert("The quotient of " + num1 + " divided by " + num2 + " is " + quotient);
    }
```

2. Tạo slideshow đơn giản

- __Bước 1: Tạo mã HTML__

```
    <div id="slideshow">
        <img src="image1.jpg">
        <img src="image2.jpg">
        <img src="image3.jpg">
        <img src="image4.jpg">
    </div>
```


- __Bước 2: Tạo mã CSS__

```
    #slideshow {
        position: relative;
        height: 300px;
        width: 100%;
        overflow: hidden;
    }

    #slideshow img {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }

    #slideshow img.active {
        opacity: 1;
    }
```

- __Bước 3: Tạo mã Javascript__

```
    let slides = document.querySelectorAll("#slideshow img");
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 2000);

    function nextSlide() {
        slides[currentSlide].className = "";
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = "active";
    }
```

Trong ví dụ này, chúng ta tạo một div với id là "slideshow" và chứa một số hình ảnh. Trong CSS, chúng ta định dạng slideshow và các hình ảnh bên trong. Hình ảnh được định vị tuyệt đối và có độ trong suốt ban đầu là 0. Khi một hình ảnh được chọn làm hình ảnh hiện tại, độ trong suốt của nó được đặt thành 1 để hiển thị nó.

Trong JavaScript, chúng ta sử dụng phương thức "querySelectorAll" để lấy tất cả các hình ảnh trong slideshow. Biến "currentSlide" lưu trữ chỉ số của hình ảnh hiện tại và "slideInterval" là biến setInterval sẽ chuyển đổi hình ảnh trong slideshow sau mỗi 2 giây.

Phương thức "nextSlide" được sử dụng để chuyển đổi hình ảnh trong slideshow. Nó đặt độ trong suốt của hình ảnh hiện tại thành 0 và di chuyển tới hình ảnh tiếp theo bằng cách tăng chỉ số của "currentSlide". Nếu "currentSlide" lớn hơn số lượng hình ảnh có sẵn, nó được đặt lại thành 0. Sau đó, hình ảnh mới được đặt độ trong suốt thành 1 để hiển thị nó.

Với mã này, chúng ta đã tạo một slide hình ảnh đơn giản bằng JavaScript.

3. Tạo slideshow với thư viện jQuery

- __Bước 1: Tạo mã HTML__

```
    <div class="slider">
        <div><img src="image1.jpg"></div>
        <div><img src="image2.jpg"></div>
        <div><img src="image3.jpg"></div>
        <div><img src="image4.jpg"></div>
    </div>
```

- __Bước 2: Tạo mã Javascript__

```
    $(document).ready(function(){
        $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            dots: true
        });
    });
```

Trong ví dụ này, chúng ta sử dụng thư viện jQuery và thư viện Slick để tạo slide hình ảnh. Chúng ta có một div với class là "slider" và chứa các hình ảnh. Trong JavaScript, chúng ta sử dụng phương thức "slick" để tạo slide hình ảnh. Các thuộc tính "autoplay", "autoplaySpeed", "arrows", và "dots" được sử dụng để cấu hình slide hình ảnh. Thuộc tính "autoplay" được đặt thành true để slide hình ảnh tự động chuyển đổi. Thuộc tính "autoplaySpeed" được sử dụng để đặt khoảng thời gian chuyển đổi giữa các hình ảnh. Thuộc tính "arrows" được đặt thành false để ẩn các nút điều khiển trượt. Thuộc tính "dots" được đặt thành true để hiển thị các chấm điều khiển trượt.

3. Bổ sung 2 nút previous và next để điều khiển slide

- __Bước 1: Tạo mã HTML__

```
    <div class="slider">
        <div><img src="image1.jpg"></div>
        <div><img src="image2.jpg"></div>
        <div><img src="image3.jpg"></div>
        <div><img src="image4.jpg"></div>
    </div>
    <button id="previous">Previous</button>
    <button id="next">Next</button>
```

- __Bước 2: Tạo mã CSS__

```
    .slider {
        width: 100%;
        overflow: hidden;
        position: relative;
    }
    .slider img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }
    .slider img.active {
        opacity: 1;
    }
```

- __Bước 3: Tạo mã Javascript__

```
    let slides = document.querySelectorAll('.slider img');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 2000);

    document.getElementById('previous').addEventListener('click', previousSlide);
    document.getElementById('next').addEventListener('click', nextSlide);

    function previousSlide() {
        slides[currentSlide].className = '';
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        slides[currentSlide].className = 'active';
    }

    function nextSlide() {
        slides[currentSlide].className = '';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'active';
    }
```

Trong ví dụ này, chúng ta đã thêm hai button vào slide hình ảnh và đặt các id là "previous" và "next". Trong JavaScript, chúng ta sử dụng phương thức "addEventListener" để gán sự kiện "click" cho các button và gọi các hàm "previousSlide" và "nextSlide" khi người dùng nhấp vào nút previous hoặc next. Chúng ta đã cập nhật các hàm "previousSlide" và "nextSlide" để thay đổi slide hiện tại dựa trên hướng di chuyển của người dùng. Nếu người dùng nhấp vào nút previous, chúng ta giảm giá trị của biến "currentSlide" và kiểm tra nếu giá trị này nhỏ hơn 0, ta sẽ đặt giá trị của "currentSlide" thành "slides.length - 1" để quay lại slide cuối cùng. Nếu người dùng nhấp vào nút next, chúng ta tăng giá trị của biến "currentSlide" và sử dụng phép toán "%" để kiểm tra nếu giá trị này vượt quá số lượng slide, ta sẽ đặt giá trị của "currentSlide" thành 0 để quay lại slide đầu tiên.