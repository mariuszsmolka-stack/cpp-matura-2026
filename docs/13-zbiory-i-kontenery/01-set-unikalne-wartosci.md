---
layout: default
title: set - unikalne wartości
---

# `set` - unikalne wartości

## Krótkie wprowadzenie do problemu

`set` rozwiązuje problem powtórzeń. Gdy interesują Cię tylko różne wartości, nie musisz ręcznie sprawdzać, czy element był już podany.

## Wyjaśnienie idei prostym językiem

`set` to uporządkowany zbiór. Nie przechowuje drugiego egzemplarza tej samej wartości, nie działa jak tablica i nie ma dostępu przez indeks. Kolejność wynika z wartości, a nie z kolejności wpisania. Ponowne `insert()` tej samej wartości pozostawia zawartość bez zmian: wcześniejszy element nie jest usuwany, a następny egzemplarz nie zostaje dodany.

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

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;
    set<int> liczby;
    for (int i = 0; i < liczbaElementow; i++)
    {
        int liczba;
        cin >> liczba;
        liczby.insert(liczba);
    }
    for (int liczba : liczby)
    {
        cout << liczba << " ";
    }
    cout << "\n";
    return 0;
}
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

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;
    set<int> liczby;
    bool znalezionoDuplikat = false;
    for (int i = 0; i < liczbaElementow; i++)
    {
        int liczba;
        cin >> liczba;
        if (liczby.count(liczba))
        {
            znalezionoDuplikat = true;
        }
        else
        {
            liczby.insert(liczba);
        }
    }
    cout << (znalezionoDuplikat ? "Duplikat.\n" : "Brak duplikatu.\n");
    return 0;
}
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

int main()
{
    string t;
    getline(cin, t);
    set<char> liczby;
    for (char c : t)
    {
        if (c != ' ')
        {
            liczby.insert(c);
        }
    }
    cout << liczby.size() << "\n";
    return 0;
}
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

Dane wejściowe mają opisany format. Jeśli polecenie nie wymaga odrzucenia wartości spoza zakresu, przyjmij, że spełniają podane ograniczenia. W wynikach wypisujących listy dodatkowa spacja na końcu wiersza nie ma znaczenia.

### Ćwiczenie 1. Co zostaje w zbiorze?

Zapisz zawartość zbioru po każdej operacji oraz przewidź końcowy rozmiar:

```cpp
set<int> numery;
numery.insert(8);
numery.insert(3);
numery.insert(8);
numery.erase(5);
numery.erase(3);
```

Czy trzecia operacja usuwa wcześniej zapisane `8`?

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Odróżnij ponowne wstawienie od jawnego usuwania przez `erase()`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

Kolejne stany: `{8}`, `{3, 8}`, `{3, 8}`, `{3, 8}`, `{8}`. Rozmiar końcowy: 1. Ponowne wstawienie 8 niczego nie usuwa i nie dodaje drugiego egzemplarza. Usuwanie nieobecnego 5 również nie zmienia zbioru.

</details>

### Ćwiczenie 2. Ile różnych wyników?

Wczytaj liczbę wyników `n` (`0–100`), a potem `n` liczb całkowitych. Wypisz liczbę różnych wyników. Dane spełniają podane ograniczenia. Dla braku wyników odpowiedzią ma być zero.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Rozmiar zbioru po wstawieniu danych mówi, ile różnych wartości zapamiętano.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    int liczbaWynikow;
    cin >> liczbaWynikow;
    set<int> wyniki;
    for (int indeks = 0; indeks < liczbaWynikow; indeks++)
    {
        int wynik;
        cin >> wynik;
        wyniki.insert(wynik);
    }
    cout << wyniki.size() << "\n";
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 2</summary>

Dane wejściowe:

```text
5
4 4 2 9 2
```

Wynik:

```text
3
```

Dane wejściowe:

```text
0
```

Wynik:

```text
0
```

</details>

### Ćwiczenie 3. Duplikat wykryty za późno

Fragment ma zgłaszać powtórzony identyfikator, ale zgłasza także pierwsze wystąpienie:

```cpp
identyfikatory.insert(numer);
if (identyfikatory.count(numer))
{
    cout << "Powtórzony\n";
}
```

Wyjaśnij przyczynę. Napisz program wczytujący `n` (`0–100`) i `n` identyfikatorów. Dla każdego wypisz `Nowy` albo `Powtórzony`, zależnie od tego, czy pojawił się wcześniej.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Zastanów się, jaki stan powinno badać sprawdzenie: przed dodaniem czy po nim.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

Po `insert()` identyfikator już istnieje. Trzeba sprawdzić poprzedni stan zbioru.

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    int liczbaIdentyfikatorow;
    cin >> liczbaIdentyfikatorow;
    set<int> identyfikatory;
    for (int indeks = 0; indeks < liczbaIdentyfikatorow; indeks++)
    {
        int numer;
        cin >> numer;
        if (identyfikatory.count(numer))
        {
            cout << "Powtórzony\n";
        }
        else
        {
            cout << "Nowy\n";
            identyfikatory.insert(numer);
        }
    }
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 3</summary>

Dane wejściowe:

```text
3
7 2 7
```

Wynik:

```text
Nowy
Nowy
Powtórzony
```

Dane wejściowe:

```text
1
7
```

Wynik:

```text
Nowy
```

</details>

### Ćwiczenie 4. Anulowanie zgłoszenia

Zbiór zgłoszeń zawiera numery `{12, 25, 40}`. Wczytaj numer do anulowania. Jeśli istnieje, usuń go i wypisz `Usunięto.`. W przeciwnym razie wypisz `Brak zgłoszenia.`. W kolejnym wierszu wypisz liczbę pozostałych zgłoszeń. Nie dodawaj numeru podczas sprawdzania.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Najpierw sprawdź obecność. Usunięcie nieobecnego numeru samo w sobie nie zmienia zbioru.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    set<int> zgloszenia = {12, 25, 40};
    int numer;
    cin >> numer;
    if (zgloszenia.count(numer))
    {
        zgloszenia.erase(numer);
        cout << "Usunięto.\n";
    }
    else
    {
        cout << "Brak zgłoszenia.\n";
    }
    cout << zgloszenia.size() << "\n";
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 4</summary>

Dane wejściowe:

```text
25
```

Wynik:

```text
Usunięto.
2
```

Dane wejściowe:

```text
99
```

Wynik:

```text
Brak zgłoszenia.
3
```

</details>

### Ćwiczenie 5. Czy set przechowa historię?

Rejestr wejść ma postać `12, 7, 12`. Trzeba zachować kolejność i wszystkie wejścia, a osobno podać liczbę różnych osób. Wybierz kontener do historii i kontener pomocniczy. Porównaj rozwiązanie z użyciem samego `set`. Podaj zawartość obu kontenerów; nie pisz programu.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Czy po zapisaniu danych tylko w zbiorze odtworzysz trzecie wejście?

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

Historia: `vector<int>` z zawartością `{12, 7, 12}`. Pomocniczy `set<int>`: `{7, 12}`, czyli dwie osoby. Sam `set` nie zachowa powtórnego wejścia ani kolejności. Dla trzech danych można też policzyć różne osoby pętlami, ale zbiór upraszcza powtarzane sprawdzanie obecności.

</details>

### Ćwiczenie 6. Jedna nagroda na osobę — ćwiczenie trudniejsze

Wczytaj `n` (`0–100`) i `n` numerów osób w kolejności zgłoszeń. Wypisz numery osób otrzymujących nagrodę: każda osoba ma ją otrzymać tylko przy pierwszym zgłoszeniu, a kolejność przyznawania ma odpowiadać wejściu. Dla `n = 0` wypisz `Brak zgłoszeń.`. Wyjaśnij, dlaczego wypisanie samej zawartości `set` nie spełnia polecenia.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 6</summary>

Zbiór może pamiętać, kto już otrzymał nagrodę. Moment wypisania numeru nie musi być momentem przechodzenia po zbiorze.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 6</summary>

Wypisujemy numer od razu przy pierwszym zgłoszeniu. Iteracja po `set` dałaby kolejność rosnącą, a nie kolejność zgłoszeń.

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    int liczbaZgloszen;
    cin >> liczbaZgloszen;
    set<int> nagrodzeni;
    if (liczbaZgloszen == 0)
    {
        cout << "Brak zgłoszeń.\n";
        return 0;
    }
    for (int indeks = 0; indeks < liczbaZgloszen; indeks++)
    {
        int numer;
        cin >> numer;
        if (!nagrodzeni.count(numer))
        {
            cout << numer << " ";
            nagrodzeni.insert(numer);
        }
    }
    cout << "\n";
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 6</summary>

Dane wejściowe:

```text
5
12 7 12 3 7
```

Wynik:

```text
12 7 3
```

Dane wejściowe:

```text
0
```

Wynik:

```text
Brak zgłoszeń.
```

Dane wejściowe:

```text
3
8 8 8
```

Wynik:

```text
8
```

</details>

## Typowe błędy

- Próba użycia `zbior[0]`.
- Oczekiwanie kolejności wpisywania.
- Utrata potrzebnych powtórzeń.

## Podsumowanie

`set` jest dobry do unikalnych wartości. Nie zastępuje `vector` w każdej sytuacji.
