# Angular Gulp Vorlage

Es wurde verwendet

 * Gulp als Taskrunner
 * SCSS zur Erstellung von CSS
 * Lite-Server
 * Typescript
 * Tslint
 * Routing
 
 Der Code wird im Verzeichnis `src` bearbeitet und im Verzeichnis `build` für den Lite-Server bereit gestellt.

```
Das Node Module und Type Script wird mit Node.js gebildet
```

#### Installation und starten
##### Git Clone
Als erstes muss der Code aus dem Repository auf den lokalen PC geklont werden.

```
git clone --> URL aus Repository verwenden
```

##### Installieren
Das geklonte Projekt am besten im IntelliJ öffnen und im Terminal alle nötigen Packages mit NPM installieren.
node_module bereit stellen. Das dauert einige Zeit, da ein paar Dateien herunter geladen werden.

```
npm i
```

##### Applikation vorbereiten und starten
Damit die Applikation im Browser gestartet werden kann, müssen noch die folgenden package.json Tasks durchgeführt werden.

```
postinstall --> erstellt typings
build --> erstellt das Verzeichnis mit der App für den Server
start --> startet den Lite-Server und öffnet den Browser (in diesem Fall Chrome)
```

<br>

#### Übersicht package.json Tasks und Gulp Tasks

<table border="1">
<tr>
<th>package.json Task</th>
<th>löst aus</th>
<th>Gulp Task</th>
<th>macht oder löst aus</th>
</tr>
<tr>
<td>postinstall</td>
<td>typings install</td>
<td>---</td>
<td>---</td>
</tr>
<tr>
<td>build</td>
<td>gulp build</td>
<td>build</td>
<td>Löst aus: <br>compile, resources, libs</td>
</tr>
<tr>
<td>start</td>
<td>stoppt alles was läuft<br>gulp watch<br>startet Lite-Server</td>
<td>watch</td>
<td>startet Überwachung</td>
</tr>
<tr>
<td>clean</td>
<td>gulp clean</td>
<td>clean</td>
<td>Löscht das Verzeichnis `build`</td>
</tr>
<tr>
<td>compile</td>
<td>gulp compile</td>
<td>compile</td>
<td>Löst aus: tslint<br>Compiliert TS nach JS und legt <br>diese im Verzeichnis `build` ab</td>
</tr>
<tr>
<td>typings</td>
<td>typings</td>
<td>---</td>
<td>---</td>
</tr>
</table>


