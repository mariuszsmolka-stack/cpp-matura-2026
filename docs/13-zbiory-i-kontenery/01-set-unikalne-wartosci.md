---
layout: default
title: set - unikalne wartości
---

# `set` - unikalne wartości

## Krótkie wprowadzenie do problemu

`set` rozwiązuje problem powtórzeń. Gdy interesują Cię tylko różne wartości, nie musisz ręcznie sprawdzać, czy element był już podany.

## Wyjaśnienie idei prostym językiem

`set` to uporządkowany zbiór. Nie przechowuje duplikatów, nie działa jak tablica i nie ma dostępu przez indeks. Kolejność wynika z wartości, a nie z kolejności wpisania.

## Składnia

```cpp
#include <set>
set<int> liczby;
liczby.insert(7);
liczby.erase(7);
liczby.count(7);
liczby.find(7);
liczby.size();
liczby.empty();
```

## Przykład 1 - różne wyniki

```cpp
#include <iostream>
#include <set>
using namespace std;
int main(){int n;cin>>n;set<int>s;for(int i=0;i<n;i++){int x;cin>>x;s.insert(x);}for(int x:s)cout<<x<<" ";cout<<"\n";return 0;}
```
<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
6
4 7 4 2 7 9
```

Wynik:

```text
2 4 7 9
```

</details>

## Omówienie przykładu 1

Program wczytuje liczby, dodaje je przez `insert()` i wypisuje różne wartości rosnąco.

## Przykład 2 - powtórzony identyfikator

```cpp
#include <iostream>
#include <set>
using namespace std;
int main(){int n;cin>>n;set<int>s;bool d=false;for(int i=0;i<n;i++){int x;cin>>x;if(s.count(x))d=true;else s.insert(x);}cout<<(d?"Duplikat.\n":"Brak duplikatu.\n");return 0;}
```
<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
5
101 205 101 330 205
```

Wynik:

```text
Duplikat.
```

</details>

## Przykład 3 - różne znaki w napisie

Spacje pomijamy, wielkość liter ma znaczenie.

```cpp
#include <iostream>
#include <set>
#include <string>
using namespace std;
int main(){string t;getline(cin,t);set<char>s;for(char c:t)if(c!=' ')s.insert(c);cout<<s.size()<<"\n";return 0;}
```
<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
ala ma kota
```

Wynik:

```text
6
```

</details>

## Kiedy tego użyć?

Gdy potrzebujesz unikalnych i uporządkowanych wartości albo częstego sprawdzania obecności.

## Kiedy wystarczy vector?

Dla małej listy, gdzie powtórzenia i kolejność wpisania są ważne, `vector` jest prostszy.

## Kiedy wybrać coś innego?

Dla relacji klucz => wartość wybierz `map`. Dla powtórzeń w uporządkowanym kontenerze można rozważyć `multiset`.

## Ćwiczenia

### Ćwiczenie 1

Wczytaj liczby i wypisz różne wartości.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Dodawaj liczby przez `insert()`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

`set` usuwa powtórzenia.

```cpp
#include <iostream>
#include <set>
using namespace std;
int main(){int n;cin>>n;set<int>s;for(int i=0;i<n;i++){int x;cin>>x;s.insert(x);}for(int x:s)cout<<x<<" ";cout<<"\n";return 0;}
```

</details>
### Ćwiczenie 2

Wczytaj liczby i wypisz liczbę różnych wartości.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Użyj `size()`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

Rozmiar `set` to liczba różnych wartości.

```cpp
#include <iostream>
#include <set>
using namespace std;
int main(){int n;cin>>n;set<int>s;for(int i=0;i<n;i++){int x;cin>>x;s.insert(x);}cout<<s.size()<<"\n";return 0;}
```

</details>
### Ćwiczenie 3

Sprawdź, czy wśród identyfikatorów jest duplikat.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Przed dodaniem użyj `count()`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

`set` pokazuje, czy wartość była już widziana.

```cpp
#include <iostream>
#include <set>
using namespace std;
int main(){int n;cin>>n;set<int>s;bool d=false;for(int i=0;i<n;i++){int x;cin>>x;if(s.count(x))d=true;else s.insert(x);}cout<<(d?"Duplikat.\n":"Brak duplikatu.\n");return 0;}
```

</details>
### Ćwiczenie 4

Usuń wskazaną wartość ze zbioru.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Użyj `erase(wartosc)`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

`set` usuwa wartość bez indeksu.

```cpp
#include <iostream>
#include <set>
using namespace std;
int main(){set<int>s; s.insert(3);s.insert(8);s.insert(10);int x;cin>>x;s.erase(x);for(int v:s)cout<<v<<" ";cout<<"\n";return 0;}
```

</details>
### Ćwiczenie 5

Wczytaj słowa i wypisz unikalne słowa.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Użyj `set<string>`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

`set<string>` porządkuje napisy.

```cpp
#include <iostream>
#include <set>
#include <string>
using namespace std;
int main(){int n;cin>>n;set<string>s;for(int i=0;i<n;i++){string x;cin>>x;s.insert(x);}for(const string &x:s)cout<<x<<"\n";return 0;}
```

</details>
### Ćwiczenie 6

Policz unikalne znaki bez spacji.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 6</summary>

Użyj `getline()` i `set<char>`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 6</summary>

Każdy znak trafia do zbioru raz.

```cpp
#include <iostream>
#include <set>
#include <string>
using namespace std;
int main(){string t;getline(cin,t);set<char>s;for(char c:t)if(c!=' ')s.insert(c);cout<<s.size()<<"\n";return 0;}
```

</details>

## Typowe błędy

- Próba użycia `zbior[0]`.
- Oczekiwanie kolejności wpisywania.
- Utrata potrzebnych powtórzeń.

## Podsumowanie

`set` jest dobry do unikalnych wartości. Nie zastępuje `vector` w każdej sytuacji.
