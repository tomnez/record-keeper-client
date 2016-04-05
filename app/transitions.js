export default function() {
  this.transition(
    this.inHelper('liquid-modal'),
    this.use('fade', { duration: 0 })
  );
}
