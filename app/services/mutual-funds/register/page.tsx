'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ClientRegistration() {
  const [formData, setFormData] = useState({
    // Personal Details
    name: '',
    email: '',
    phone: '',
    pan: '',
    aadhar: '',
    dob: '',
    address: '',
    occupation: '',
    income: '',
    
    // Nominee Details
    nomineeName: '',
    nomineeRelation: '',
    nomineeDob: '',
    nomineeAddress: '',
    
    // Bank Details
    bankName: '',
    accountNumber: '',
    ifsc: '',
    
    // Investment Details
    monthlyInvestment: '',
    investmentMode: '',
    
    // Insurance Details
    hasHealthInsurance: '',
    healthInsuranceCover: '',
    hasTermInsurance: '',
    termInsuranceCover: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/register-client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit registration')
      }

      alert('Registration successful! We will contact you shortly.')
    } catch (error) {
      console.error('Error submitting registration:', error)
      alert('Failed to submit registration. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardTitle className="text-2xl text-blue-800">Client Registration Form</CardTitle>
          <CardDescription className="text-lg">
            Begin your investment journey with Futuredge Solutions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal Details</TabsTrigger>
                <TabsTrigger value="nominee">Nominee Details</TabsTrigger>
                <TabsTrigger value="bank">Bank Details</TabsTrigger>
                <TabsTrigger value="investment">Investment Details</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pan">PAN Number</Label>
                    <Input
                      id="pan"
                      name="pan"
                      required
                      value={formData.pan}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="aadhar">Aadhaar Number</Label>
                    <Input
                      id="aadhar"
                      name="aadhar"
                      required
                      value={formData.aadhar}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      name="dob"
                      type="date"
                      required
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="occupation">Occupation</Label>
                    <Input
                      id="occupation"
                      name="occupation"
                      required
                      value={formData.occupation}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="income">Annual Income</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, income: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select income range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-5L">Below 5 Lakhs</SelectItem>
                        <SelectItem value="5-10L">5-10 Lakhs</SelectItem>
                        <SelectItem value="10-25L">10-25 Lakhs</SelectItem>
                        <SelectItem value="25-50L">25-50 Lakhs</SelectItem>
                        <SelectItem value="50L+">Above 50 Lakhs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </TabsContent>

              <TabsContent value="nominee" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nomineeName">Nominee Full Name</Label>
                    <Input
                      id="nomineeName"
                      name="nomineeName"
                      required
                      value={formData.nomineeName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nomineeRelation">Relationship with Nominee</Label>
                    <Input
                      id="nomineeRelation"
                      name="nomineeRelation"
                      required
                      value={formData.nomineeRelation}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nomineeDob">Nominee Date of Birth</Label>
                    <Input
                      id="nomineeDob"
                      name="nomineeDob"
                      type="date"
                      required
                      value={formData.nomineeDob}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nomineeAddress">Nominee Address</Label>
                  <Input
                    id="nomineeAddress"
                    name="nomineeAddress"
                    required
                    value={formData.nomineeAddress}
                    onChange={handleChange}
                  />
                </div>
              </TabsContent>

              <TabsContent value="bank" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="bankName">Bank Name</Label>
                    <Input
                      id="bankName"
                      name="bankName"
                      required
                      value={formData.bankName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">Account Number</Label>
                    <Input
                      id="accountNumber"
                      name="accountNumber"
                      required
                      value={formData.accountNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ifsc">IFSC Code</Label>
                    <Input
                      id="ifsc"
                      name="ifsc"
                      required
                      value={formData.ifsc}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="investment" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="monthlyInvestment">Monthly Investment Amount</Label>
                    <Input
                      id="monthlyInvestment"
                      name="monthlyInvestment"
                      type="number"
                      required
                      value={formData.monthlyInvestment}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="investmentMode">Investment Mode</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, investmentMode: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select investment mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sip">Monthly SIP</SelectItem>
                        <SelectItem value="lumpsum">Lumpsum</SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4 bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold">Insurance Details (Optional)</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label>Do you have Health Insurance?</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, hasHealthInsurance: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.hasHealthInsurance === 'yes' && (
                      <div>
                        <Label>Health Insurance Cover Amount</Label>
                        <Input
                          name="healthInsuranceCover"
                          value={formData.healthInsuranceCover}
                          onChange={handleChange}
                          placeholder="Enter cover amount"
                        />
                      </div>
                    )}

                    <div>
                      <Label>Do you have Term Insurance?</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, hasTermInsurance: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.hasTermInsurance === 'yes' && (
                      <div>
                        <Label>Term Insurance Cover Amount</Label>
                        <Input
                          name="termInsuranceCover"
                          value={formData.termInsuranceCover}
                          onChange={handleChange}
                          placeholder="Enter cover amount"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <Button type="submit" className="w-full">
              Submit Registration
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

