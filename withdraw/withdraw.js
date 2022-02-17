"use strict";

export const withdraw = (clients, balances, client, amount) => {
  if (balances[clients.indexOf(client)] - amount > 0) {
    balances[clients.indexOf(client)] -= amount;

    return balances[clients.indexOf(client)];
  }

  return -1;
};
