for (let i = 0;;i++) {
    numX= prompt("для завершения введите break, для продолжения введите continue, для результата оставте поле пустым ")
    if (numX === `break`) break;
    else if (numX === `continue`){ i=(i++);} 
    else alert(i)
  }



