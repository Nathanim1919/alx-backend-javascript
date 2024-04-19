import { RowElement, RowId } from "./interface";

export function insertRowElement(rowElement: RowElement): RowId {
  console.log(rowElement);
  return Math.floor(Math.random() * 100);
}

export function deleteRowElement(rowId: RowId): void {
  console.log(rowId);
}

export function updateRowElement(rowId: RowId, rowElement: RowElement): void {
  console.log(rowId);
  console.log(rowElement);
}

export function queryRowElement(rowId: RowId): RowElement {
  console.log(rowId);
  return {
    firstName: "Aberham",
    lastName: "Tadele",
    age: 11,
    location: "Ethiopia",
  };
}