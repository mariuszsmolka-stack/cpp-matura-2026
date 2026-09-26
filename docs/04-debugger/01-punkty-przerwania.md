---
layout: default
title: Punkty przerwania
---

# Punkty przerwania

## Cel lekcji

Nauczysz się zatrzymywać program w wybranym miejscu i kontynuować jego działanie do kolejnego punktu przerwania.

## Krótkie wprowadzenie do problemu

Zwykłe uruchomienie programu pokazuje tylko końcowy efekt. Debugger pozwala zatrzymać program w środku działania.

Dzięki temu możesz zobaczyć, co program zrobił do tej chwili i co dopiero ma wykonać.

## Czym jest punkt przerwania?

Punkt przerwania to znak postawiony przy wierszu programu. Mówi debuggerowi: zatrzymaj program, gdy wykonanie dojdzie do tego miejsca.

W Code::Blocks 25.03 punkt przerwania można zwykle dodać kliknięciem na lewym marginesie edytora, obok numeru wiersza. Można też użyć polecenia `Debug -> Toggle breakpoint`.

Tym samym poleceniem albo ponownym kliknięciem na marginesie można punkt przerwania usunąć.

Możesz ustawić kilka punktów przerwania. Wtedy program zatrzyma się na pierwszym z nich, a po kontynuowaniu działania zatrzyma się na następnym.

## Przygotowanie projektu

Przed rozpoczęciem:

1. Otwórz projekt Code::Blocks.
2. Upewnij się, że aktywna konfiguracja to `Debug`.
3. Zbuduj projekt w konfiguracji `Debug`.
4. Ustaw punkt przerwania.
5. Uruchom program w debuggerze poleceniem `Debug -> Start`.

Nie debuguj luźnego pliku `.cpp`, który nie należy do projektu. Taki plik może uruchamiać się normalnie, ale debugger może działać nieprzewidywalnie.

## Program do ćwiczeń

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 12;
    int liczbaSztuk = 4;
    int koszt = cena * liczbaSztuk;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

## Gdzie ustawić punkty przerwania?

Ustaw pierwszy punkt przerwania przy wierszu:

```cpp
int koszt = cena * liczbaSztuk;
```

Program zatrzyma się przed obliczeniem zmiennej `koszt`. W tym momencie instrukcje tworzące `cena` i `liczbaSztuk` zostały już wykonane. Następną instrukcją do wykonania jest obliczenie `koszt`.

Ustaw drugi punkt przerwania przy wierszu:

```cpp
cout << "Koszt: " << koszt << '\n';
```

Program zatrzyma się przed wypisaniem wyniku. Wtedy instrukcja obliczająca `koszt` została już wykonana, więc `koszt` powinien mieć wartość `48`.

## Aktualne miejsce zatrzymania

Strzałka debuggera albo podświetlony wiersz wskazuje następną instrukcję do wykonania. Jeżeli program zatrzymał się przy obliczeniu `koszt`, to obliczenie najczęściej jeszcze się nie wykonało.

Dopiero po przejściu do następnego wiersza wartość `koszt` powinna się zmienić.

## Kontynuowanie programu

Gdy program zatrzyma się na pierwszym punkcie przerwania, użyj `Debug -> Continue`. Program ruszy dalej i zatrzyma się przy następnym punkcie przerwania albo zakończy działanie.

Sesję debugowania możesz zakończyć poleceniem `Debug -> Stop debugger`.

## Kiedy tego użyć?

Punktu przerwania używaj wtedy, gdy wiesz, który fragment programu chcesz sprawdzić.

Nie musisz przechodzić przez cały program od początku. Możesz zatrzymać go dokładnie tam, gdzie dzieje się coś ważnego.

## Kiedy wybrać coś innego?

Jeżeli chcesz tylko szybko zobaczyć wynik programu, zwykłe uruchomienie wystarczy. Debugger jest potrzebny wtedy, gdy wynik jest błędny albo chcesz zrozumieć przebieg programu.

## Ćwiczenia

### Ćwiczenie 1

Ustaw jeden punkt przerwania przy obliczeniu zmiennej `koszt`. Uruchom program w debuggerze i sprawdź, które instrukcje zostały wykonane.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Kliknij na marginesie obok wiersza `int koszt = cena * liczbaSztuk;`. Potem uruchom program w debuggerze poleceniem `Debug -> Start`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 12;
    int liczbaSztuk = 4;
    int koszt = cena * liczbaSztuk;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- punkt przerwania: wiersz `int koszt = cena * liczbaSztuk;`,
- wykonane wcześniej: `int cena = 12;` oraz `int liczbaSztuk = 4;`,
- następna instrukcja: `int koszt = cena * liczbaSztuk;`,
- po wykonaniu tej instrukcji: `koszt = 48`.

</details>

### Ćwiczenie 2

Ustaw dwa punkty przerwania: przed obliczeniem `koszt` i przed instrukcją `cout`. Uruchom program i przejdź od pierwszego punktu do drugiego przez kontynuowanie.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Po zatrzymaniu na pierwszym punkcie użyj polecenia `Debug -> Continue`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 12;
    int liczbaSztuk = 4;
    int koszt = cena * liczbaSztuk;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- pierwszy punkt przerwania: `int koszt = cena * liczbaSztuk;`,
- drugi punkt przerwania: `cout << "Koszt: " << koszt << '\n';`,
- przy drugim punkcie instrukcja obliczenia została już wykonana,
- następna instrukcja przy drugim punkcie: wypisanie wyniku,
- `koszt = 48`.

</details>

### Ćwiczenie 3

Usuń punkt przerwania przy obliczeniu `koszt`, zostaw tylko punkt przy instrukcji `cout` i uruchom program ponownie w debuggerze.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Kliknij ponownie na marginesie przy pierwszym punkcie przerwania albo użyj `Debug -> Toggle breakpoint`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 12;
    int liczbaSztuk = 4;
    int koszt = cena * liczbaSztuk;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- aktywny punkt przerwania: tylko wiersz z `cout`,
- program nie zatrzymuje się wcześniej,
- następna instrukcja: wypisanie wyniku,
- przy zatrzymaniu `koszt` ma już wartość `48`.

</details>

### Ćwiczenie 4

Przed wykonaniem instrukcji obliczającej `koszt` przewidź wartość, którą zmienna otrzyma po wykonaniu tej instrukcji.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Zatrzymaj program przed obliczeniem `koszt`. Pomnóż ręcznie `cena` przez `liczbaSztuk`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 12;
    int liczbaSztuk = 4;
    int koszt = cena * liczbaSztuk;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- punkt przerwania: `int koszt = cena * liczbaSztuk;`,
- następna instrukcja: obliczenie zmiennej `koszt`,
- przed wykonaniem: `cena = 12`, `liczbaSztuk = 4`,
- po wykonaniu: `koszt = 48`.

</details>

### Ćwiczenie 5

Znajdź miejsce błędnego obliczenia. Program powinien obliczyć koszt zakupów, ale wynik jest zbyt mały.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Ustaw punkt przerwania przy obliczeniu `koszt`. Sprawdź, czy program mnoży cenę przez liczbę sztuk.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int cena = 12;
    int liczbaSztuk = 4;
    int koszt = cena + liczbaSztuk;

    cout << "Koszt: " << koszt << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- punkt przerwania: wiersz `int koszt = cena + liczbaSztuk;`,
- następna instrukcja: błędne obliczenie zmiennej `koszt`,
- po wykonaniu: `koszt = 16`,
- oczekiwany koszt to `48`, więc błąd jest w operatorze `+`, który powinien być operatorem `*`.

Poprawna instrukcja:

```cpp
int koszt = cena * liczbaSztuk;
```

</details>

## Podsumowanie

Punkt przerwania zatrzymuje program w wybranym miejscu. Wskazany wiersz zwykle dopiero ma zostać wykonany. Kontynuowanie pozwala przejść do następnego punktu przerwania lub do końca programu.
