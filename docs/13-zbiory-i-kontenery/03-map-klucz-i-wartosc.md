---
layout: default
title: map - klucz i wartość
---

# `map` - klucz i wartość

## Krótkie wprowadzenie do problemu

`map` przydaje się, gdy dane wyszukujemy po nazwie, kodzie albo identyfikatorze.

## Wyjaśnienie idei prostym językiem

`map` przechowuje pary klucz => wartość. Klucze są unikalne i uporządkowane.

## Składnia

```cpp
#include <map>
map<string, int> punkty;
punkty["Adam"] = 15;
punkty.find("Adam");
punkty.count("Adam");
punkty.erase("Adam");
```

```cpp
for (const auto &element : punkty)
{
    cout << element.first << " => " << element.second << '\n';
}
```

`auto` rozpoznaje typ. `first` to klucz, `second` to wartość, `const &` chroni element i unika kopii.

## Pułapka `mapa[klucz]`

Jeżeli klucza nie ma, `mapa[klucz]` tworzy nowy element z wartością domyślną. Do sprawdzania używaj `find()` albo `count()`.

## Przykład 1 - produkt => cena

```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;
int main(){map<string,double> ceny;ceny["zeszyt"]=4.5;ceny["dlugopis"]=3.2;string p;cin>>p;if(ceny.find(p)!=ceny.end())cout<<ceny[p]<<"\n";else cout<<"Brak.\n";return 0;}
```
<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
dlugopis
```

Wynik:

```text
3.2
```

</details>

## Omówienie przykładu 1

Program sprawdza klucz przez `find()`, a potem odczytuje wartość.

## Przykład 2 - identyfikator => punkty

```cpp
#include <iostream>
#include <map>
using namespace std;
int main(){map<int,int> p;p[101]=35;p[205]=42;p[205]=45;p.erase(101);for(const auto &e:p)cout<<e.first<<" => "<<e.second<<"\n";return 0;}
```
<details markdown="1">
<summary>Pokaż wynik</summary>

```text
205 => 45
```

</details>

## Przykład 3 - miasto => temperatura

```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;
int main(){int n;cin>>n;map<string,double> t;for(int i=0;i<n;i++){string m;double x;cin>>m>>x;t[m]=x;}for(const auto &e:t)cout<<e.first<<" => "<<e.second<<"\n";return 0;}
```
<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
3
Krakow 21.5
Gdansk 18
Lodz 20
```

Wynik:

```text
Gdansk => 18
Krakow => 21.5
Lodz => 20
```

</details>

## Kiedy tego użyć?

Gdy masz unikalny klucz i często szukasz przypisanej wartości.

## Kiedy wystarczy vector?

Dla kilku produktów można użyć `vector<Produkt>` i pętli. `map` jest wygodniejsza przy wielu wyszukiwaniach.

## Kiedy wybrać coś innego?

Dla samych unikalnych wartości wystarczy `set`.

## Ćwiczenia

### Ćwiczenie 1

Utwórz słownik pojęć i wyszukaj hasło.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Użyj `map<string, string>`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

Słowo jest kluczem.

```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;
int main(){map<string,string> ceny;ceny["set"]="zbior";ceny["map"]="klucz wartosc";string p;cin>>p;if(ceny.find(p)!=ceny.end())cout<<ceny[p]<<"\n";else cout<<"Brak.\n";return 0;}
```

</details>
### Ćwiczenie 2

Wyszukaj cenę produktu.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Kluczem jest nazwa produktu.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

Cena jest wartością w mapie.

```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;
int main(){map<string,double> ceny;ceny["zeszyt"]=4.5;ceny["dlugopis"]=3.2;string p;cin>>p;if(ceny.find(p)!=ceny.end())cout<<ceny[p]<<"\n";else cout<<"Brak.\n";return 0;}
```

</details>
### Ćwiczenie 3

Zaktualizuj punkty ucznia.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Przypisanie pod istniejący klucz zmienia wartość.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

Mapa przechowuje aktualną wartość.

```cpp
#include <iostream>
#include <map>
using namespace std;
int main(){map<int,int> p;p[1]=10;p[1]=15;cout<<p[1]<<"\n";return 0;}
```

</details>
### Ćwiczenie 4

Bezpiecznie sprawdź temperaturę miasta.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Użyj `find()`, nie samego `[]`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

find nie tworzy nowego klucza.

```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;
int main(){map<string,double> t;t["Krakow"]=21.5;string m;cin>>m;auto it=t.find(m);if(it!=t.end())cout<<it->second<<"\n";else cout<<"Brak.\n";return 0;}
```

</details>
### Ćwiczenie 5

Usuń wpis z mapy po kluczu.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Użyj `erase(klucz)`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

Klucz wskazuje cały wpis.

```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;
int main(){map<string,int> m;m["A"]=1;m["B"]=2;string k;cin>>k;m.erase(k);for(const auto &e:m)cout<<e.first<<" => "<<e.second<<"\n";return 0;}
```

</details>
### Ćwiczenie 6

Wybierz kontener dla cennika i uzasadnij w komentarzu.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 6</summary>

Kod produktu jest kluczem.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 6</summary>

Wybrano `map`, bo wyszukujemy po kodzie.

```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;
int main(){map<string,double> ceny;ceny["zeszyt"]=4.5;ceny["dlugopis"]=3.2;string p;cin>>p;if(ceny.find(p)!=ceny.end())cout<<ceny[p]<<"\n";else cout<<"Brak.\n";return 0;}
```

</details>

## Typowe błędy

- Przypadkowe tworzenie klucza przez `mapa[klucz]`.
- Mylenie `first` i `second`.
- Oczekiwanie kolejności dodawania.

## Podsumowanie

`map` opisuje zależność klucz => wartość.
