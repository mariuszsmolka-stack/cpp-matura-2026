---
layout: default
title: Zliczanie i grupowanie
---

# Zliczanie i grupowanie

## Krótkie wprowadzenie do problemu

W zadaniach często liczymy wystąpienia liczb, słów lub znaków albo grupujemy wiele wartości pod jednym kluczem.

## Wyjaśnienie idei prostym językiem

`map` może działać jak licznik: klucz mówi, co liczymy, a wartość mówi, ile razy to wystąpiło.

## Składnia

```cpp
map<int, int> licznik;
licznik[liczba]++;
map<string, vector<int>> wynikiUczniow;
wynikiUczniow[imie].push_back(wynik);
```

`map<klucz, vector<wartosc>>` często czytelnie zastępuje `multimap`.

## Przykład 1 - wystąpienia liczb

```cpp
#include <iostream>
#include <map>
using namespace std;
int main(){int n;cin>>n;map<int,int> l;for(int i=0;i<n;i++){int x;cin>>x;l[x]++;}for(const auto &e:l)cout<<e.first<<" => "<<e.second<<"\n";return 0;}
```
<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
7
4 2 4 7 2 4 9
```

Wynik:

```text
2 => 2
4 => 3
7 => 1
9 => 1
```

</details>

## Omówienie przykładu 1

Pierwsze wystąpienie tworzy licznik `0`, potem `++` zwiększa go do `1`.

## Przykład 2 - wystąpienia słów

Wczytujemy pojedyncze słowa. Wielkość liter ma znaczenie, interpunkcja nie jest czyszczona.

```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;
int main(){int n;cin>>n;map<string,int> l;for(int i=0;i<n;i++){string s;cin>>s;l[s]++;}for(const auto &e:l)cout<<e.first<<" => "<<e.second<<"\n";return 0;}
```
<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
6
ala ma kota ala ma psa
```

Wynik:

```text
ala => 2
kota => 1
ma => 2
psa => 1
```

</details>

## Przykład 3 - wystąpienia znaków

```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;
int main(){string t;getline(cin,t);map<char,int>s;for(char c:t)if(c!=' ')s[c]++;for(const auto &e:s)cout<<e.first<<" => "<<e.second<<"\n";return 0;}
```
<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
ala ma
```

Wynik:

```text
a => 3
l => 1
m => 1
```

</details>

## Przykład 4 - kilka wyników ucznia

```cpp
#include <iostream>
#include <map>
#include <string>
#include <vector>
using namespace std;
int main(){int n;cin>>n;map<string,vector<int>> w;for(int i=0;i<n;i++){string im;int x;cin>>im>>x;w[im].push_back(x);}for(const auto &e:w){cout<<e.first<<": ";for(int x:e.second)cout<<x<<" ";cout<<"\n";}return 0;}
```
<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
5
Anna 5
Jan 4
Anna 3
Ewa 5
Jan 5
```

Wynik:

```text
Anna: 5 3
Ewa: 5
Jan: 4 5
```

</details>

## Kiedy tego użyć?

Gdy zliczasz albo grupujesz dane według klucza.

## Kiedy wystarczy vector?

Jeżeli liczysz wystąpienia jednej konkretnej wartości w małym `vector`, zwykła pętla wystarczy.

## Kiedy wybrać coś innego?

Do samej obecności wystarczy `set`. Bez kolejności i przy wielu wyszukiwaniach można rozważyć `unordered_map`.

## Ćwiczenia

### Ćwiczenie 1

Znajdź dominantę.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Najpierw zlicz wystąpienia.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

Mapa przechowuje liczniki.

```cpp
#include <iostream>
#include <map>
using namespace std;
int main(){int n;cin>>n;map<int,int> l;for(int i=0;i<n;i++){int x;cin>>x;l[x]++;}int val=0,b=0;for(const auto &e:l)if(e.second>b){val=e.first;b=e.second;}cout<<val<<" => "<<b<<"\n";return 0;}
```

</details>
### Ćwiczenie 2

Wypisz histogram słów znakami `*`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Po zliczeniu wypisz pętlą gwiazdki.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

Mapa trzyma licznik słowa.

```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;
int main(){int n;cin>>n;map<string,int> l;for(int i=0;i<n;i++){string s;cin>>s;l[s]++;}for(const auto &e:l){cout<<e.first<<": ";for(int i=0;i<e.second;i++)cout<<"*";cout<<"\n";}return 0;}
```

</details>
### Ćwiczenie 3

Policz znaki w napisie.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Użyj `map<char,int>`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

Kluczem jest znak.

```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;
int main(){string t;getline(cin,t);map<char,int>s;for(char c:t)if(c!=' ')s[c]++;for(const auto &e:s)cout<<e.first<<" => "<<e.second<<"\n";return 0;}
```

</details>
### Ćwiczenie 4

Zsumuj punkty zawodników.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Użyj `suma[nazwisko] += punkty`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

Mapa grupuje sumy według nazwiska.

```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;
int main(){int n;cin>>n;map<string,int> suma;for(int i=0;i<n;i++){string z;int p;cin>>z>>p;suma[z]+=p;}for(const auto &e:suma)cout<<e.first<<" => "<<e.second<<"\n";return 0;}
```

</details>
### Ćwiczenie 5

Zgrupuj oceny uczniów.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Użyj `map<string, vector<int>>`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

Jednemu uczniowi przypisujemy wiele ocen.

```cpp
#include <iostream>
#include <map>
#include <string>
#include <vector>
using namespace std;
int main(){int n;cin>>n;map<string,vector<int>> w;for(int i=0;i<n;i++){string im;int x;cin>>im>>x;w[im].push_back(x);}for(const auto &e:w){cout<<e.first<<": ";for(int x:e.second)cout<<x<<" ";cout<<"\n";}return 0;}
```

</details>
### Ćwiczenie 6

Pogrupuj produkty według kategorii.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 6</summary>

Kluczem jest kategoria.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 6</summary>

Wartością jest `vector` nazw produktów.

```cpp
#include <iostream>
#include <map>
#include <string>
#include <vector>
using namespace std;
int main(){int n;cin>>n;map<string,vector<string>> p;for(int i=0;i<n;i++){string k,nazwa;cin>>k>>nazwa;p[k].push_back(nazwa);}for(const auto &e:p){cout<<e.first<<": ";for(const string &x:e.second)cout<<x<<" ";cout<<"\n";}return 0;}
```

</details>

## Typowe błędy

- Użycie `set`, gdy trzeba policzyć wystąpienia.
- Mylenie zliczania z grupowaniem.
- Zapominanie, że `licznik[klucz]++` tworzy brakujący klucz.

## Podsumowanie

Zliczanie i grupowanie przez `map` to bardzo praktyczny wzorzec.
