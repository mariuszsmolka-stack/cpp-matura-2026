---
layout: default
title: Dwa wskaźniki
---

# Dwa wskaźniki

Dwa indeksy tablicy mogą pomóc pominąć wiele niepotrzebnych porównań. Najpierw trzeba uzasadnić, który indeks wolno przesunąć.

## Kiedy tego użyć?

Gdy własności danych pozwalają bezpiecznie odrzucać kolejne możliwości. Przykładem jest szukanie pary o zadanej sumie w tablicy uporządkowanej niemalejąco. Innym zastosowaniem jest porównywanie znaków słowa od obu końców.

## Kiedy wybrać coś innego?

Jeśli nie umiesz uzasadnić przesunięcia, sama obecność dwóch indeksów nie wystarczy. Przy wielu pytaniach o sumę fragmentu niezmiennej tablicy rozważ sumy prefiksowe.

## Przed rozpoczęciem

Powtórz tablice, indeksy, pętle, warunki, typ `bool` i napisy `string`.

## Lekcje

- [Dwa wskaźniki - wprowadzenie]({{ '/14-algorytmy-podstawowe/dwa-wskazniki/01-wprowadzenie.html' | relative_url }}) - pudełka, para o sumie 18, palindromy i zadania A-E.
