---
sidebar_position: 2
---

# Algoritmo de Euclides

## Propiedades

* Dos números se llaman primos relativos, o coprimos, si su máximo común divisor es igual a 1.

    * $$gcd\left(a,\:b\right)\:==\:1$$

* Todo divisor común de $a$ y $b$ es divisor de $gcd(a\:,b)$.

* $gcd(a\:,b)$ donde tanto $a$ como $b$ son distintos de cero, también se puede definir como el entero positivo más pequeño $d$ que puede ser una solución/que se puede expresar como una combinación lineal de $a$ y $b$ en la forma $d=\:a\cdot p\:+\:b\cdot q$, donde tanto p como q son números enteros.

* $gcd\left(a,\:0\right)\:=\:\left|a\right|$, para $a\:\ne \:0$, ya que cualquier número es divisor de 0, y el mayor divisor de a es $|a|$.

* Si a divide a $b \cdot c$ y $gcd(a,b)=d$, entonces $\frac{a}{d}$ divide a $c$.

* Si $m$ es un número entero no negativo, entonces $gcd\left(m⋅a,\:m⋅b\right)\:=\:m⋅gcd\left(a,\:b\right)$. También se sigue de esta propiedad que si $gcd\left(a,\:b\right)=g$, entonces $\frac{a}{g}$ y $\frac{b}{g}\:$deben ser coprimos. Trate de derivarlo usted mismo.

* Si $m$ es cualquier número entero $gcd\left(a,\:b\right)=gcd\left(a+m\cdot b,\:b\right)$.

* El **GCD**: $gcd\left(a,\:b\right)\:=\:gcd\left(b,\:a\%b\right)$

* Si $m$ es un divisor común positivo de $a$ y $b$, entonces $gcd\left(\frac{a}{m},\:\frac{b}{m}\right)\:=\:\frac{gcd\left(a,\:b\right)}{m}$.

* **GCD** es una función multiplicativa. Eso es si $a1$ y $a2$ son coprimos $gcd\left(a1\cdot a2,\:b\right)=gcd\left(a1,\:b\right)\cdot gcd\left(a2,\:b\right)$. En particular, recordando que **GCD** es una función de valor entero positivo, obtenemos que $gcd\left(a,\:b⋅c\right)\:=\:1$ si y solo si $gcd\left(a,\:b\right)\:=\:1$ y $gcd\left(a,\:c\right)\:=\:1$. si el gcd es uno, entonces no es necesario que sean coprimos para distribuir el gcd, además, cada gcd individualmente también debe ser 1.

* El **GCD** es una función conmutativa: $gcd\left(a,\:b\right)\:=\:gcd\left(b,\:a\right)$.

* El **GCD** es una función asociativa: $gcd\left(a,\:gcd\left(b,\:c\right)\right)\:=\:gcd\left(gcd\left(a,\:b\right),\:c\right)$. Por lo tanto, $gcd\left(a,\:b,\:c,\:...\right)$ se puede usar para denotar el GCD de múltiples argumentos.

* $gcd\left(a,\:b\right)$ está estrechamente relacionado con el mínimo común múltiplo $lcm\left(a,\:b\right)$: tenemos $gcd\left(a,\:b\right)⋅lcm\left(a,\:b\right)\:=\:|a⋅b|$.

* Las siguientes versiones de distributividad son válidas: $gcd\left(a,\:lcm\left(b,\:c\right)\right)\:=\:lcm\left(gcd\left(a,\:b\right),\:gcd\left(a,\:c\right)\right)$ y $\:lcm\left(a,\:gcd\left(b,\:c\right)\right)\:=\:gcd\:\left(lcm\left(a,\:b\right),\:lcm\left(a,\:c\right)\right)$.

* Si tenemos las factorizaciones en primos únicas de $a\:=\:p_1^{e_1}⋅p_2^{e_2}⋅p_3^{e_3}⋅⋅⋅p_m^{e_m}$ y $b=\:p_1^{f_1}⋅p_2^{f_2}⋅p_3^{f_3}⋅⋅⋅p_m^{f_m}$ donde $e_i\:\ge \:0\:$ y $\:f_i\:\ge \:0$, entonces el gcd de a y b es gcd(a,b) = p1^min(e1,f1) p2^min(e2,f2) ⋅⋅⋅ pm^min(em,fm).