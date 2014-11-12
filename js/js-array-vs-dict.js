

Javascript 的数组Array,既是一个数组，也是一个字典(Dictionary).
先举例看看数组的用法。


Javascript代码  

  1. var a = new Array();  
  2. a[0] = "Acer";  
  3. a[1] = "Dell";  
  4. for (var i in a) {  
  5.     alert(i);          
  6. }  


上面的代码创立了一个数组，每个元素都是一个字符串对象。
然后对数组进行遍历。注意 i 的结果为 0 和 1，a[i] 的结果才为字符串。
这个很象上一篇中说到的遍历对象的属性。

下面再看一下字典的用法。


Javascript代码  

  1. var computer_price = new Array();  
  2. computer_price["Acer"] = 500;  
  3. computer_price["Dell"] = 600;  
  4. alert(computer_price["Acer"]);  

我们甚至可以同样象上面那样遍历这个数组（字典）


Javascript代码  

  1. for (var i in computer_price) {  
  2.     alert(i + ": " + computer_price[i]);  
  3. }  

这里的 i 即为字典的每个键值。输出结果为：
Acer: 500
Dell: 600

下面，看一下Javascript的有趣之处，还是上面那个例子。
我们可以把 computer_price 看成一个字典对象，而它的每个键值就是一个属性。
也就是说 Acer 是 computer_price 的一个属性。我们可以这样使用它： computer_price.Acer

下面再来看一下字典和数组的简化声明方式。


Javascript代码  

  1. var array = [1, 2, 3]; // 数组  
  2. var array2 = { "Acer": 500, "Dell": 600 }; // 字典  
  3. alert(array2.Acer); // 50  


这样对字典的声明是和前面的一样的。在我们的例子中，Acer又是键值，也可是作为字典对象的属性了。

