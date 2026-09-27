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
map<string, vector<int >> wynikiUczniow;
wynikiUczniow[imie].push_back(wynik);
```

`map<klucz, vector<wartosc>>` często czytelnie zastępuje `multimap`.

## Przykład 1 - wystąpienia liczb

```cpp
#include <iostream>
#include <map>

using namespace std;

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;
    map<int, int> l;
    for (int i = 0; i < liczbaElementow; i++)
    {
        int liczba;
        cin >> liczba;
        l[liczba]++;
    }
    for (const auto &e : l)
    {
        cout << e.first << " => " << e.second << "\n";
    }
    return 0;
}
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

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;
    map<string, int> l;
    for (int i = 0; i < liczbaElementow; i++)
    {
        string s;
        cin >> s;
        l[s]++;
    }
    for (const auto &e : l)
    {
        cout << e.first << " => " << e.second << "\n";
    }
    return 0;
}
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

int main()
{
    string t;
    getline(cin, t);
    map<char, int> s;
    for (char c : t)
    {
        if (c != ' ')
        {
            s[c]++;
        }
    }
    for (const auto &e : s)
    {
        cout << e.first << " => " << e.second << "\n";
    }
    return 0;
}
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

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;
    map<string, vector<int >> w;
    for (int i = 0; i < liczbaElementow; i++)
    {
        string im;
        int liczba;
        cin >> im >> liczba;
        w[im].push_back(liczba);
    }
    for (const auto &e : w)
    {
        cout << e.first << ": ";
        for (int liczba : e.second)
        {
            cout << liczba << " ";
        }
        cout << "\n";
    }
    return 0;
}
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

Dane wejściowe mają opisany format. Jeśli polecenie nie wymaga odrzucenia wartości spoza zakresu, przyjmij, że spełniają podane ograniczenia. W wynikach wypisujących listy dodatkowa spacja na końcu wiersza nie ma znaczenia.

### Ćwiczenie 1. Jak rośnie licznik?

Pusta mapa `map<int, int> licznik` przetwarza kolejno `4, 2, 4` instrukcją `licznik[liczba]++`. Zapisz stan po każdym kroku. Ile jest kluczy, a ile wynosi suma liczników? Wyjaśnij, dlaczego pierwszy odczyt nieistniejącego klucza przez `[]` jest tu celowy.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Nowy licznik typu int zaczyna od zera. Liczba kluczy i liczba przetworzonych danych nie muszą być równe.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

Stany: `{4 => 1}`, `{2 => 1, 4 => 1}`, `{2 => 1, 4 => 2}`. Dwa klucze, suma liczników 3. Tutaj chcemy tworzyć licznik dla nowej wartości, dlatego wstawianie przez `[]` jest potrzebne.

</details>

### Ćwiczenie 2. Histogram ocen

Wczytaj `n` (`0–100`), a następnie `n` ocen całkowitych od 1 do 6. Dane są poprawne. Dla każdej występującej oceny wypisz rosnąco ocenę, dwukropek, spację i tyle gwiazdek, ile razy wystąpiła. Dla `n = 0` wypisz `Brak ocen.`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Mapa przechowa częstości. Osobna pętla dla każdego klucza może zamienić licznik na gwiazdki.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>
#include <map>

using namespace std;

int main()
{
    int liczbaOcen;
    cin >> liczbaOcen;
    map<int, int> licznik;
    for (int indeks = 0; indeks < liczbaOcen; indeks++)
    {
        int ocena;
        cin >> ocena;
        licznik[ocena]++;
    }
    if (licznik.empty()) cout << "Brak ocen.\n";
    for (const auto &wpis : licznik)
    {
        cout << wpis.first << ": ";
        for (int powtorzenie = 0; powtorzenie < wpis.second; powtorzenie++)
        {
            cout << "*";
        }
        cout << "\n";
    }
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 2</summary>

Dane wejściowe:

```text
5
4 2 4 5 2
```

Wynik:

```text
2: **
4: **
5: *
```

Dane wejściowe:

```text
0
```

Wynik:

```text
Brak ocen.
```

</details>

### Ćwiczenie 3. Suma nie jest ostatnim wynikiem

W pętli wczytującej pary `imie`, `punkty` użyto `sumy[imie] = punkty;`. Program miał sumować punkty ze wszystkich rund. Wyjaśnij błąd i napisz poprawiony program. Wczytaj `n` (`0–100`), potem `n` par: imię bez spacji i punkty (`0–100`). Wypisz sumy alfabetycznie według imion jako `imię => suma`. Dla zera rund wypisz `Brak danych.`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Zastanów się, czy nowa runda zastępuje poprzednią, czy powinna ją powiększyć.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

Przypisanie zachowuje tylko ostatnią rundę. Trzeba dodać nowe punkty do dotychczasowej sumy.

```cpp
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main()
{
    int liczbaRund;
    cin >> liczbaRund;
    map<string, int> sumy;
    for (int indeks = 0; indeks < liczbaRund; indeks++)
    {
        string imie;
        int punkty;
        cin >> imie >> punkty;
        sumy[imie] += punkty;
    }
    if (sumy.empty()) cout << "Brak danych.\n";
    for (const auto &wpis : sumy)
    {
        cout << wpis.first << " => " << wpis.second << "\n";
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
Anna 5
Jan 4
Anna 3
```

Wynik:

```text
Anna => 8
Jan => 4
```

Dane wejściowe:

```text
0
```

Wynik:

```text
Brak danych.
```

</details>

### Ćwiczenie 4. Dominanta z remisem

Wczytaj `n` (`0–100`) i `n` liczb całkowitych. Wypisz wartość występującą najczęściej oraz jej liczbę wystąpień. Przy remisie wybierz najmniejszą wartość. Dla braku danych wypisz `Brak danych.`. Nie zakładaj, że zero występuje w danych.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Mapa przechodzi po kluczach rosnąco. Ustal, czy remis powinien zastępować wcześniej wybraną wartość.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>
#include <map>

using namespace std;

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;
    map<int, int> licznik;
    for (int indeks = 0; indeks < liczbaElementow; indeks++)
    {
        int liczba;
        cin >> liczba;
        licznik[liczba]++;
    }
    if (licznik.empty())
    {
        cout << "Brak danych.\n";
        return 0;
    }
    int dominanta = 0, najwiecej = 0;
    for (const auto &wpis : licznik)
    {
        if (wpis.second > najwiecej)
        {
            dominanta = wpis.first;
            najwiecej = wpis.second;
        }
    }
    cout << dominanta << " " << najwiecej << "\n";
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 4</summary>

Dane wejściowe:

```text
5
8 2 8 2 9
```

Wynik:

```text
2 2
```

Dane wejściowe:

```text
0
```

Wynik:

```text
Brak danych.
```

Dane wejściowe:

```text
1
-5
```

Wynik:

```text
-5 1
```

</details>

### Ćwiczenie 5. Zachowaj wszystkie wyniki

Wczytaj `n` (`0–100`), a potem `n` par: imię bez spacji i wynik (`0–100`). Dla każdego imienia wypisz wszystkie wyniki w kolejności ich podania. Imiona wypisz alfabetycznie. Zachowaj powtórzone wyniki. Dla braku danych wypisz `Brak danych.`. Wybierz typ wartości w mapie i wyjaśnij, dlaczego sama suma nie wystarcza.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Jednemu kluczowi trzeba przypisać całą sekwencję, a nie jeden licznik.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

Wartością jest `vector<int>`. Suma straciłaby informacje o poszczególnych wynikach i ich kolejności.

```cpp
#include <iostream>
#include <map>
#include <string>
#include <vector>

using namespace std;

int main()
{
    int liczbaWynikow;
    cin >> liczbaWynikow;
    map<string, vector<int>> wyniki;
    for (int indeks = 0; indeks < liczbaWynikow; indeks++)
    {
        string imie;
        int wynik;
        cin >> imie >> wynik;
        wyniki[imie].push_back(wynik);
    }
    if (wyniki.empty()) cout << "Brak danych.\n";
    for (const auto &wpis : wyniki)
    {
        cout << wpis.first << ": ";
        for (int wynik : wpis.second) cout << wynik << " ";
        cout << "\n";
    }
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 5</summary>

Dane wejściowe:

```text
4
Jan 4
Anna 5
Jan 4
Jan 2
```

Wynik:

```text
Anna: 5
Jan: 4 4 2
```

Dane wejściowe:

```text
0
```

Wynik:

```text
Brak danych.
```

</details>

### Ćwiczenie 6. Kto osiągnął próg? — ćwiczenie trudniejsze

Wczytaj `n` (`0–100`), potem `n` par: imię bez spacji i punkty (`0–100`). Na końcu wczytaj próg (`0–10000`). Zsumuj punkty każdej osoby. Wypisz alfabetycznie wyłącznie imiona osób z sumą co najmniej równą progowi. Jeśli nikt nie spełnia warunku, wypisz `Brak.`. Nie twórz wpisów dla osób, których nie ma w danych.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 6</summary>

Po zebraniu danych wykonaj drugi etap: wybór osób na podstawie ich sum. Zapamiętaj, czy kogokolwiek wypisano.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 6</summary>

```cpp
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main()
{
    int liczbaWynikow;
    cin >> liczbaWynikow;
    map<string, int> sumy;
    for (int indeks = 0; indeks < liczbaWynikow; indeks++)
    {
        string imie;
        int punkty;
        cin >> imie >> punkty;
        sumy[imie] += punkty;
    }
    int prog;
    cin >> prog;
    bool znaleziono = false;
    for (const auto &wpis : sumy)
    {
        if (wpis.second >= prog)
        {
            cout << wpis.first << "\n";
            znaleziono = true;
        }
    }
    if (!znaleziono) cout << "Brak.\n";
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 6</summary>

Dane wejściowe:

```text
3
Jan 4
Anna 8
Jan 4
8
```

Wynik:

```text
Anna
Jan
```

Dane wejściowe:

```text
1
Jan 4
5
```

Wynik:

```text
Brak.
```

Dane wejściowe:

```text
0
0
```

Wynik:

```text
Brak.
```

</details>

## Typowe błędy

- Użycie `set`, gdy trzeba policzyć wystąpienia.
- Mylenie zliczania z grupowaniem.
- Zapominanie, że `licznik[klucz]++` tworzy brakujący klucz.

## Podsumowanie

Zliczanie i grupowanie przez `map` to bardzo praktyczny wzorzec.
