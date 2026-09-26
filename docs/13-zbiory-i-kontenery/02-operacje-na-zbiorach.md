---
layout: default
title: Operacje na zbiorach
---

# Operacje na zbiorach

## Krótkie wprowadzenie do problemu

Zbiory można łączyć i porównywać. To pomaga przy grupach uczniów, kodach produktów albo literach napisów.

## Wyjaśnienie idei prostym językiem

Dla `A = {1, 2, 4, 7}` i `B = {2, 3, 4, 8}` suma to `{1, 2, 3, 4, 7, 8}`, część wspólna to `{2, 4}`, różnica `A - B` to `{1, 7}`, a różnica symetryczna to elementy tylko z jednego zbioru.

## Składnia

```cpp
if (b.count(x) == 1)
{
    cout << x << " ";
}
```

## Przykład 1 - suma zbiorów

```cpp
#include <iostream>
#include <set>
using namespace std;
int main(){set<int>a={1,2,4,7},b={2,3,4,8},s;for(int x:a)s.insert(x);for(int x:b)s.insert(x);for(int x:s)cout<<x<<" ";cout<<"\n";return 0;}
```
<details markdown="1">
<summary>Pokaż wynik</summary>

```text
1 2 3 4 7 8
```

</details>

## Omówienie przykładu 1

Dodajemy elementy obu zbiorów do trzeciego `set`.

## Przykład 2 - część wspólna

```cpp
#include <iostream>
#include <set>
using namespace std;
int main(){set<int>a={1,2,4,7},b={2,3,4,8};for(int x:a)if(b.count(x))cout<<x<<" ";cout<<"\n";return 0;}
```
<details markdown="1">
<summary>Pokaż wynik</summary>

```text
2 4
```

</details>

## Przykład 3 - różnica i podzbiór

```cpp
#include <iostream>
#include <set>
using namespace std;
int main(){set<int>a={1,2,4,7},b={2,3,4,8};for(int x:a)if(!b.count(x))cout<<x<<" ";cout<<"\n";set<int>w={2,4};bool ok=true;for(int x:w)if(!a.count(x))ok=false;cout<<(ok?"Podzbior.\n":"Braki.\n");return 0;}
```
<details markdown="1">
<summary>Pokaż wynik</summary>

```text
1 7
Podzbior.
```

</details>

## Kiedy tego użyć?

Gdy porównujesz dwie grupy danych.

## Kiedy wystarczy vector?

Dla kilku elementów i jednego porównania zwykłe pętle po `vector` mogą być prostsze.

## Kiedy wybrać coś innego?

Dla danych klucz => wartość wybierz `map`.

## Ćwiczenia

### Ćwiczenie 1

Wypisz sumę dwóch zbiorów.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Dodaj elementy obu zbiorów do trzeciego.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

Suma zbiorów pasuje do `set`.

```cpp
#include <iostream>
#include <set>
using namespace std;
int main(){set<int>a={1,2},b={2,3},s;for(int x:a)s.insert(x);for(int x:b)s.insert(x);for(int x:s)cout<<x<<" ";cout<<"\n";return 0;}
```

</details>
### Ćwiczenie 2

Wypisz część wspólną.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Sprawdź `count()` w drugim zbiorze.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

Część wspólna wymaga obecności w obu zbiorach.

```cpp
#include <iostream>
#include <set>
using namespace std;
int main(){set<int>a={1,2,4},b={2,4,8};for(int x:a)if(b.count(x))cout<<x<<" ";cout<<"\n";return 0;}
```

</details>
### Ćwiczenie 3

Wypisz różnicę A - B.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Wypisz elementy z A, których nie ma w B.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

Różnica sprawdza brak w drugim zbiorze.

```cpp
#include <iostream>
#include <set>
using namespace std;
int main(){set<int>a={1,2,4},b={2,8};for(int x:a)if(!b.count(x))cout<<x<<" ";cout<<"\n";return 0;}
```

</details>
### Ćwiczenie 4

Sprawdź podzbiór kodów produktów.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Każdy wymagany kod musi być dostępny.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

To klasyczny test podzbioru.

```cpp
#include <iostream>
#include <set>
#include <string>
using namespace std;
int main(){set<string>d={"A1","B2","C3"},w={"A1","C3"};bool ok=true;for(const string &x:w)if(!d.count(x))ok=false;cout<<(ok?"OK\n":"BRAK\n");return 0;}
```

</details>
### Ćwiczenie 5

Wypisz znaki tylko z jednego z dwóch napisów.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Sprawdź różnice w obie strony.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

To różnica symetryczna.

```cpp
#include <iostream>
#include <set>
#include <string>
using namespace std;
int main(){string a,b;cin>>a>>b;set<char>x,y;for(char c:a)x.insert(c);for(char c:b)y.insert(c);for(char c:x)if(!y.count(c))cout<<c<<" ";for(char c:y)if(!x.count(c))cout<<c<<" ";cout<<"\n";return 0;}
```

</details>

## Typowe błędy

- Mylenie sumy zbiorów z dodawaniem liczb.
- Sprawdzanie podzbioru tylko dla pierwszego elementu.
- Mylenie `A - B` z `B - A`.

## Podsumowanie

Operacje na zbiorach to zwykle pętla i sprawdzenie `count()`.
