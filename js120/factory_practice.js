
// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

//factory function to create invoices

function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    invoicePayments: [],
    total() {
      return this.phone + this.internet;
    },
    addPayment(payment) {
      this.invoicePayments.push(payment);
    },
    addPayments(payments) {
      // sum together multiple payments and return total of payments
      payments.forEach(payment => this.invoicePayments.push(payment));
    },
    paymentTotal(payments) {
      return this.invoicePayments.reduce((sum, payment)  => sum + payment.total(), 0);
    },
    amountDue() {
      return this.total() - this.paymentTotal();
    },

  };
}

function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total() {
      if (this.amount) return this.amount;
      return this.internet + this.phone;
    },
  };
}

// function paymentTotal(payments) {
//   return payments.reduce((sum, payment)  => sum + payment.total(), 0);
// }

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());
console.log(invoice);
