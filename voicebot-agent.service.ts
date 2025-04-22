update(id: string, updateDto: any) {
  return this.agentModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
}

delete(id: string) {
  return this.agentModel.findByIdAndDelete(id).exec();
}

